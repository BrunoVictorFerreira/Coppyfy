import moment from 'moment'
import { GROUPS, TEAMS_FOR_GROUP } from '../../utils/constants'

export const groups = (token) => {
    return (dispatch, getState) => {
        dispatch({
            type: GROUPS,
            isQL: true,
            $payload: {
                token,
                body: ` 
                groups{
                    id
                    name
                  }
                `
            }
        })
    }
    
}
export const teamsForGroup = (group_id, token) => {
    return (dispatch, getState) => {
        dispatch({
            type: TEAMS_FOR_GROUP,
            isQL: true,
            $payload: {
                token,
                body: ` 
                teams_for_group(group_id: ${group_id}){
                    id
                    name
                    id
                    name
                    brasao{
                        id
                        url
                    }
                    informations{
                        pts
                        vit
                        der
                        sg
                    }
                    
                  }
                `
            }
        })
    }
    
}





