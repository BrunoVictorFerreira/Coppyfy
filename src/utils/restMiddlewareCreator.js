import axios from 'axios';
import { logout } from '../store/actions/authentication';
import { changeLoadingState, onError } from '../store/actions/loadingAndError';
import { URL_API_COPPYFY } from '@env';

api = axios.create({
  baseURL: URL_API_COPPYFY,
  headers: { 'Content-Type': 'application/json' }
});

console.warn("URL_API_COPPYFY", URL_API_COPPYFY)

export default (restMiddlewareCreator = store => next => action => {
  if (!action || !action.$payload) {
    return next(action);
  }
  const {
    $payload,
    onResponse,
    $meta,
    isQL = false,
    token,
    withLoadingAndError = true,
  } = action;

  const loadingState = loading => {
    if (withLoadingAndError) {
      store.dispatch(changeLoadingState(loading));
    }
  };

  const errorState = response => {
    if (withLoadingAndError) {
      store.dispatch(onError(response));
    }
  };

  const method = isQL ? "POST" : $payload.method || 'GET'
  data = isQL ? {
    query: `
        query {
            ${$payload.body}
        }
    `
  } : $payload.body || null
  params = $payload.query || null;
  headers = $payload.headers || {};

  if ($payload.token) {
    headers.Authorization = 'Bearer ' + $payload.token;
  }

  store.dispatch({
    type: `${action.type}_REQUEST`,
  });

  loadingState(true);

  const validadeResponse = response => {
    if (response.status === 401) {
      store.dispatch(logout());
    }
    return response.status >= 200 && response.status < 300;
  };

  return api
    .request({
      url: isQL ? 'graphql' : $payload.url,
      method,
      data,
      params,
      headers,
    })
    .then(response => {
      console.warn("Success", response)
      var isSuccess =
        typeof onResponse === 'function'
          ? onResponse(response)
          : validadeResponse(response);

      if (!isSuccess) errorState(error.response);
      store.dispatch({
        type: `${action.type}_SUCCESS`,
        response: response,
        data: response.data,
        $meta: $meta,
      });
      loadingState(false);
    })
    .catch(error => {
      console.log('error', error)
      store.dispatch(logout());
      store.dispatch({
        type: `${action.type}_FAILURE`,
        response: error.response,
        data: error.response && error.response.data,
        $meta: $meta,
      });
      errorState(error.response);
      loadingState(false);

    });
});
