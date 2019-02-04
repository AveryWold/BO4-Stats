export const USER_INFO_UPDATE_EKIA1 = "USER_INFO_UPDATE_EKIA1";
export const USER_INFO_UPDATE_KILLS1 = "USER_INFO_UPDATE_KILLS1";
export const USER_INFO_UPDATE_DEATHS1 = "USER_INFO_UPDATE_DEATHS1";
export const USER_INFO_UPDATE_WINS1 = "USER_INFO_UPDATE_WINS1";
export const USER_INFO_UPDATE_LOSSES1 = "USER_INFO_UPDATE_LOSSES1";
export const USER_INFO_UPDATE_LONGESTKILLSTREAK1 = "USER_INFO_UPDATE_LONGESTKILLSTREAK1";
export const USER_INFO_UPDATE_EKIAPERGAME1 = "USER_INFO_UPDATE_EKIAPERGAME1";
export const USER_INFO_UPDATE_SCOREPERMINUTE1 = "USER_INFO_UPDATE_SCOREPERMINUTE1";
export const USER_INFO_IS_LOADING1 = "USER_INFO_IS_LOADING1";
export const USER_INFO_UPDATE_EKIA2 = "USER_INFO_UPDATE_EKIA2";
export const USER_INFO_UPDATE_KILLS2 = "USER_INFO_UPDATE_KILLS2";
export const USER_INFO_UPDATE_DEATHS2 = "USER_INFO_UPDATE_DEATHS2";
export const USER_INFO_UPDATE_WINS2 = "USER_INFO_UPDATE_WINS2";
export const USER_INFO_UPDATE_LOSSES2 = "USER_INFO_UPDATE_LOSSES2";
export const USER_INFO_UPDATE_LONGESTKILLSTREAK2 = "USER_INFO_UPDATE_LONGESTKILLSTREAK2";
export const USER_INFO_UPDATE_EKIAPERGAME2 = "USER_INFO_UPDATE_EKIAPERGAME2";
export const USER_INFO_UPDATE_SCOREPERMINUTE2 = "USER_INFO_UPDATE_SCOREPERMINUTE2";
export const USER_INFO_IS_LOADING2 = "USER_INFO_IS_LOADING2";
export const USER_INFO_UPDATE_USER_NAME1 = "USER_INFO_UPDATE_USER_NAME1";
export const USER_INFO_UPDATE_USER_NAME2 = "USER_INFO_UPDATE_USER_NAME2";
export const USER_INFO_UPDATE_GAMESPLAYED1 = "USER_INFO_UPDATE_GAMESPLAYED1";
export const USER_INFO_UPDATE_GAMESPLAYED2 = "USER_INFO_UPDATE_GAMESPLAYED2";

const CompareInfo = (state={}, action) => {
    switch(action.type){
        case USER_INFO_UPDATE_USER_NAME1:
            return {...state, username1: action.payload }
        case USER_INFO_UPDATE_USER_NAME2:
            return {...state, username2: action.payload }
        case USER_INFO_UPDATE_EKIA1:
            return {...state, ekia1: action.payload }
        case USER_INFO_UPDATE_KILLS1:
            return {...state, kills1: action.payload }
        case USER_INFO_UPDATE_DEATHS1:
            return {...state, deaths1: action.payload }
        case USER_INFO_UPDATE_WINS1:
            return {...state, wins1: action.payload }
        case USER_INFO_UPDATE_LOSSES1:
            return {...state, losses1: action.payload }
        case USER_INFO_UPDATE_LONGESTKILLSTREAK1:
            return {...state, longestKillstreak1: action.payload }
        case USER_INFO_UPDATE_EKIAPERGAME1:
            return {...state, ekiapergame1: action.payload }
        case USER_INFO_UPDATE_SCOREPERMINUTE1:
            return {...state, scoreperminute1: action.payload }
        case USER_INFO_IS_LOADING1:
            return {...state, isLoading1: action.payload }        
        case USER_INFO_UPDATE_EKIA2:
            return {...state, ekia2: action.payload }
        case USER_INFO_UPDATE_KILLS2:
            return {...state, kills2: action.payload }
        case USER_INFO_UPDATE_DEATHS2:
            return {...state, deaths2: action.payload }
        case USER_INFO_UPDATE_WINS2:
            return {...state, wins2: action.payload }
        case USER_INFO_UPDATE_LOSSES2:
            return {...state, losses2: action.payload }
        case USER_INFO_UPDATE_LONGESTKILLSTREAK2:
            return {...state, longestKillstreak2: action.payload }
        case USER_INFO_UPDATE_EKIAPERGAME2:
            return {...state, ekiapergame2: action.payload }
        case USER_INFO_UPDATE_SCOREPERMINUTE2:
            return {...state, scoreperminute2: action.payload }
        case USER_INFO_IS_LOADING2:
            return {...state, isLoading2: action.payload }
        case USER_INFO_UPDATE_GAMESPLAYED1:
            return {...state, gamesplayed1: action.payload }
        case USER_INFO_UPDATE_GAMESPLAYED2:
            return {...state, gamesplayed2: action.payload }
        default:
            return state;
    }
}

export default CompareInfo;