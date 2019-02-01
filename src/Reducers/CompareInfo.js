export const USER_INFO_UPDATE_EKIA = "USER_INFO_UPDATE_EKIA";
export const USER_INFO_UPDATE_KILLS = "USER_INFO_UPDATE_KILLS";
export const USER_INFO_UPDATE_DEATHS = "USER_INFO_UPDATE_DEATHS";
export const USER_INFO_UPDATE_WINS = "USER_INFO_UPDATE_WINS";
export const USER_INFO_UPDATE_LOSSES = "USER_INFO_UPDATE_LOSSES";
export const USER_INFO_UPDATE_LONGESTKILLSTREAK = "USER_INFO_UPDATE_LONGESTKILLSTREAK";
export const USER_INFO_UPDATE_EKIAPERGAME = "USER_INFO_UPDATE_EKIAPERGAME";
export const USER_INFO_UPDATE_SCOREPERMINUTE = "USER_INFO_UPDATE_SCOREPERMINUTE";
export const USER_INFO_IS_LOADING = "USER_INFO_IS_LOADING";
export const USER_INFO_UPDATE_USER_NAME1 = "USER_INFO_UPDATE_USER_NAME1";
export const USER_INFO_UPDATE_USER_NAME2 = "USER_INFO_UPDATE_USER_NAME2";

const CompareInfo = (state={}, action) => {
    switch(action.type){
        case USER_INFO_UPDATE_USER_NAME1:
            return {...state, username1: action.payload }
        case USER_INFO_UPDATE_USER_NAME2:
            return {...state, username2: action.payload }
        case USER_INFO_UPDATE_EKIA:
            return {...state, ekia: action.payload }
        case USER_INFO_UPDATE_KILLS:
            return {...state, kills: action.payload }
        case USER_INFO_UPDATE_DEATHS:
            return {...state, deaths: action.payload }
        case USER_INFO_UPDATE_WINS:
            return {...state, wins: action.payload }
        case USER_INFO_UPDATE_LOSSES:
            return {...state, losses: action.payload }
        case USER_INFO_UPDATE_LONGESTKILLSTREAK:
            return {...state, longestKillstreak: action.payload }
        case USER_INFO_UPDATE_EKIAPERGAME:
            return {...state, ekiapergame: action.payload }
        case USER_INFO_UPDATE_SCOREPERMINUTE:
            return {...state, scoreperminute: action.payload }
        case USER_INFO_IS_LOADING:
            return {...state, isLoading: action.payload }
        default:
            return state;
    }
}

export default CompareInfo;