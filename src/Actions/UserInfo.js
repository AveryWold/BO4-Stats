import {
    USER_INFO_UPDATE_USER_NAME,
    USER_INFO_UPDATE_EKIA,
    USER_INFO_UPDATE_KILLS,
    USER_INFO_UPDATE_DEATHS,
    USER_INFO_UPDATE_WINS,
    USER_INFO_UPDATE_LOSSES,
    USER_INFO_UPDATE_LONGESTKILLSTREAK,
    USER_INFO_UPDATE_EKIAPERGAME,
    USER_INFO_UPDATE_SCOREPERMINUTE,
    USER_INFO_UPDATE_TDMKILLS,
    USER_INFO_UPDATE_TDMDEATHS,
    USER_INFO_UPDATE_TDMWINS,
    USER_INFO_UPDATE_TDMLOSSES,
    USER_INFO_UPDATE_DOMKILLS,
    USER_INFO_UPDATE_DOMDEATHS,
    USER_INFO_UPDATE_DOMWINS,
    USER_INFO_UPDATE_DOMLOSSES,
    USER_INFO_UPDATE_DOMDEFENDS,
    USER_INFO_UPDATE_DOMOFFENDS,
    USER_INFO_UPDATE_DOMKILLSTREAK,
    USER_INFO_IS_LOADING,
    USER_INFO_UPDATE_USER_NAME1,
    USER_INFO_UPDATE_USER_NAME2
} from '../Reducers/UserInfo';

export const updateUserName = (username) => {
    return {
        type: USER_INFO_UPDATE_USER_NAME,
        payload: username
    };
}

export const updateEkia = (ekia) => {
    return {
        type: USER_INFO_UPDATE_EKIA,
        payload: ekia
    };
}

export const updateKills = (kills) => {
    return {
        type: USER_INFO_UPDATE_KILLS,
        payload: kills
    };
}

export const updateDeaths = (deaths) => {
    return {
        type: USER_INFO_UPDATE_DEATHS,
        payload: deaths
    };
}

export const updateWins = (wins) => {
    return {
        type: USER_INFO_UPDATE_WINS,
        payload: wins
    };
}

export const updateLosses = (losses) => {
    return {
        type: USER_INFO_UPDATE_LOSSES,
        payload: losses
    };
}

export const updateLongestKillstreak = (longestKillstreak) => {
    return {
        type: USER_INFO_UPDATE_LONGESTKILLSTREAK,
        payload: longestKillstreak
    };
}

export const updateEkiaPerGame = (ekiapergame) => {
    return {
        type: USER_INFO_UPDATE_EKIAPERGAME,
        payload: ekiapergame
    };
}

export const updateScorePerMinute = (scoreperminute) => {
    return {
        type: USER_INFO_UPDATE_SCOREPERMINUTE,
        payload: scoreperminute
    };
}

export const updateTdmKills = (tdmkills) => {
    return {
        type: USER_INFO_UPDATE_TDMKILLS,
        payload: tdmkills
    };
}

export const updateTdmDeaths = (tdmdeaths) => {
    return {
        type: USER_INFO_UPDATE_TDMDEATHS,
        payload: tdmdeaths
    };
}

export const updateTdmWins = (tdmwins) => {
    return {
        type: USER_INFO_UPDATE_TDMWINS,
        payload: tdmwins
    };
}

export const updateTdmLosses = (tdmlosses) => {
    return {
        type: USER_INFO_UPDATE_TDMLOSSES,
        payload: tdmlosses
    };
}

export const updateDomKills = (domkills) => {
    return {
        type: USER_INFO_UPDATE_DOMKILLS,
        payload: domkills
    };
}

export const updateDomDeaths = (domdeaths) => {
    return {
        type: USER_INFO_UPDATE_DOMDEATHS,
        payload: domdeaths
    };
}

export const updateDomWins = (domwins) => {
    return {
        type: USER_INFO_UPDATE_DOMWINS,
        payload: domwins
    };
}

export const updateDomLosses = (domlosses) => {
    return {
        type: USER_INFO_UPDATE_DOMLOSSES,
        payload: domlosses
    };
}

export const updateDomDefends = (domdefends) => {
    return {
        type: USER_INFO_UPDATE_DOMDEFENDS,
        payload: domdefends
    };
}

export const updateDomOffends = (domoffends) => {
    return {
        type: USER_INFO_UPDATE_DOMOFFENDS,
        payload: domoffends
    };
}

export const updateDomKillstreak = (domkillstreak) => {
    return {
        type: USER_INFO_UPDATE_DOMKILLSTREAK,
        payload: domkillstreak
    };
}

export const updateIsLoading = (isLoading) => {
    return {
        type: USER_INFO_IS_LOADING,
        payload: isLoading
    };
}

export const updateUserName1 = (username1) => {
    return {
        type: USER_INFO_UPDATE_USER_NAME1,
        payload: username1
    };
}

export const updateUserName2 = (username2) => {
    return {
        type: USER_INFO_UPDATE_USER_NAME2,
        payload: username2
    };
}