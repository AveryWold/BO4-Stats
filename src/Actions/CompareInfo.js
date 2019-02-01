import {
    USER_INFO_UPDATE_EKIA,
    USER_INFO_UPDATE_KILLS,
    USER_INFO_UPDATE_DEATHS,
    USER_INFO_UPDATE_WINS,
    USER_INFO_UPDATE_LOSSES,
    USER_INFO_UPDATE_LONGESTKILLSTREAK,
    USER_INFO_UPDATE_EKIAPERGAME,
    USER_INFO_UPDATE_SCOREPERMINUTE,
    USER_INFO_IS_LOADING,
    USER_INFO_UPDATE_USER_NAME1,
    USER_INFO_UPDATE_USER_NAME2
} from '../Reducers/CompareInfo';

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

export const updateIsLoading = (isLoading) => {
    return {
        type: USER_INFO_IS_LOADING,
        payload: isLoading
    };
}