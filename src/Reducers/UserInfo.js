export const USER_INFO_UPDATE_USER_NAME = "USER_INFO_UPDATE_USER_NAME";
export const USER_INFO_UPDATE_EKIA = "USER_INFO_UPDATE_EKIA";
export const USER_INFO_UPDATE_KILLS = "USER_INFO_UPDATE_KILLS";
export const USER_INFO_UPDATE_DEATHS = "USER_INFO_UPDATE_DEATHS";
export const USER_INFO_UPDATE_WINS = "USER_INFO_UPDATE_WINS";
export const USER_INFO_UPDATE_LOSSES = "USER_INFO_UPDATE_LOSSES";
export const USER_INFO_UPDATE_LONGESTKILLSTREAK = "USER_INFO_UPDATE_LONGESTKILLSTREAK";
export const USER_INFO_UPDATE_EKIAPERGAME = "USER_INFO_UPDATE_EKIAPERGAME";
export const USER_INFO_UPDATE_SCOREPERMINUTE = "USER_INFO_UPDATE_SCOREPERMINUTE";
export const USER_INFO_UPDATE_TDMKILLS = "USER_INFO_UPDATE_TDMKILLS";
export const USER_INFO_UPDATE_TDMDEATHS = "USER_INFO_UPDATE_TDMDEATHS";
export const USER_INFO_UPDATE_TDMWINS = "USER_INFO_UPDATE_TDMWINS";
export const USER_INFO_UPDATE_TDMLOSSES = "USER_INFO_UPDATE_TDMLOSSES";
export const USER_INFO_UPDATE_DOMKILLS = "USER_INFO_UPDATE_DOMKILLS";
export const USER_INFO_UPDATE_DOMDEATHS = "USER_INFO_UPDATE_DOMDEATHS";
export const USER_INFO_UPDATE_DOMWINS = "USER_INFO_UPDATE_DOMWINS";
export const USER_INFO_UPDATE_DOMLOSSES = "USER_INFO_UPDATE_DOMLOSSES";
export const USER_INFO_UPDATE_DOMDEFENDS = "USER_INFO_UPDATE_DOMDEFENDS";
export const USER_INFO_UPDATE_DOMOFFENDS = "USER_INFO_UPDATE_DOMOFFENDS";
export const USER_INFO_UPDATE_DOMKILLSTREAK = "USER_INFO_UPDATE_DOMKILLSTREAK";
export const USER_INFO_IS_LOADING = "USER_INFO_IS_LOADING";
export const USER_INFO_UPDATE_USER_NAME1 = "USER_INFO_UPDATE_USER_NAME1";
export const USER_INFO_UPDATE_USER_NAME2 = "USER_INFO_UPDATE_USER_NAME2";

const UserInfo = (state={}, action) => {
    switch(action.type){
        case USER_INFO_UPDATE_USER_NAME:
            return {...state, username: action.payload }
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
        case USER_INFO_UPDATE_TDMKILLS:
            return {...state, tdmkills: action.payload }
        case USER_INFO_UPDATE_TDMDEATHS:
            return {...state, tdmdeaths: action.payload }
        case USER_INFO_UPDATE_TDMWINS:
            return {...state, tdmwins: action.payload }
        case USER_INFO_UPDATE_TDMLOSSES:
            return {...state, tdmlosses: action.payload }
        case USER_INFO_UPDATE_DOMKILLS:
            return {...state, domkills: action.payload }
        case USER_INFO_UPDATE_DOMDEATHS:
            return {...state, domdeaths: action.payload }
        case USER_INFO_UPDATE_DOMWINS:
            return {...state, domwins: action.payload }
        case USER_INFO_UPDATE_DOMLOSSES:
            return {...state, domlosses: action.payload }
        case USER_INFO_UPDATE_DOMDEFENDS:
            return {...state, domdefends: action.payload }
        case USER_INFO_UPDATE_DOMOFFENDS:
            return {...state, domoffends: action.payload }
        case USER_INFO_UPDATE_DOMKILLSTREAK:
            return {...state, domkillstreak: action.payload }
        case USER_INFO_IS_LOADING:
            return {...state, isLoading: action.payload }
        case USER_INFO_UPDATE_USER_NAME1:
            return {...state, username1: action.payload }
        case USER_INFO_UPDATE_USER_NAME2:
            return {...state, username2: action.payload }
        default:
            return state;
    }
}

export default UserInfo;