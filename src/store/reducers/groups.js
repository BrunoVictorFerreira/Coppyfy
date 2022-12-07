import { GROUPS, TEAMS_FOR_GROUP } from "../../utils/constants";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native"

const groups = (state = {
    loading: null,
    message: null,
    error: null,
    groups: null,
    teams_for_groups: null
}, action) => {

    switch (action.type) {

        case `${GROUPS}_REQUEST`:
            return {
                ...state,
                loading: true
            }
        case `${GROUPS}_SUCCESS`:
            console.log("action", action)
            return {
                ...state,
                loading: false,
                groups: action?.data?.data?.groups
            }
        case `${GROUPS}_FAILURE`:
            return {
                ...state,
                loading: false
            }
        case `${TEAMS_FOR_GROUP}_REQUEST`:
            return {
                ...state,
                loading: true
            }
        case `${TEAMS_FOR_GROUP}_SUCCESS`:
            console.log("action", action)
            return {
                ...state,
                loading: false,
                teams_for_groups: action?.data?.data?.teams_for_group
            }
        case `${TEAMS_FOR_GROUP}_FAILURE`:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }

}

const persistConfig = {
    key: "groups",
    blacklist: ['loading', 'message', "error"],
    storage: AsyncStorage,
}

export default persistReducer(persistConfig, groups)

