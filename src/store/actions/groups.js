import moment from 'moment'
import { GROUPS, MATCHS, TEAMS_FOR_GROUP, ALL_TEAMS_FOR_GROUP } from '../../utils/constants'

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
export const matchs = (token) => {
    return (dispatch, getState) => {
        dispatch({
            type: MATCHS,
            isQL: true,
            $payload: {
                token,
                body: ` 
                matchs{
                    id
                first_team
                second_team
                important
                first_turn
                second_turn
                third_turn
                octaves_turn
                fourth_turn
                semi_turn
                date
                final_turn
                    
                    first_team_description{
                        name
                        group_id
                        brasao{
                            url
                        }
                    }
                    second_team_description{
                        name
                                group_id
                                brasao{
                                    url
                                }
                    }
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
                        emp
                        der
                        gols
                        sg
                    }
                    
                  }
                `
            }
        })
    }

}
export const allTeamsForGroup = (token) => {
    return (dispatch, getState) => {
        dispatch({
            type: ALL_TEAMS_FOR_GROUP,
            isQL: true,
            $payload: {
                token,
                body: ` 
                all_teams_for_group{
                    id
                    grupo
                teams{
                    id
                    name
                    brasao{
                        url
                    }
                    informations{
                        pts
            vit
            emp
            der
            gols
            sg
        
                    }
                }
                }
                `
            }
        })
    }

}





