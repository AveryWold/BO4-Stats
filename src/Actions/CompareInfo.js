import {
    USER_INFO_UPDATE_EKIA1,
    USER_INFO_UPDATE_KILLS1,
    USER_INFO_UPDATE_DEATHS1,
    USER_INFO_UPDATE_WINS1,
    USER_INFO_UPDATE_LOSSES1,
    USER_INFO_UPDATE_LONGESTKILLSTREAK1,
    USER_INFO_UPDATE_EKIAPERGAME1,
    USER_INFO_UPDATE_SCOREPERMINUTE1,
    USER_INFO_IS_LOADING1,
    USER_INFO_UPDATE_EKIA2,
    USER_INFO_UPDATE_KILLS2,
    USER_INFO_UPDATE_DEATHS2,
    USER_INFO_UPDATE_WINS2,
    USER_INFO_UPDATE_LOSSES2,
    USER_INFO_UPDATE_LONGESTKILLSTREAK2,
    USER_INFO_UPDATE_EKIAPERGAME2,
    USER_INFO_UPDATE_SCOREPERMINUTE2,
    USER_INFO_IS_LOADING2,
    USER_INFO_UPDATE_USER_NAME1,
    USER_INFO_UPDATE_USER_NAME2,
    USER_INFO_UPDATE_GAMESPLAYED1,
    USER_INFO_UPDATE_GAMESPLAYED2,
    USER_INFO_UPDATE_LEVEL1,
    USER_INFO_UPDATE_LEVEL2,
    USER_INFO_UPDATE_PRESTIGE1,
    USER_INFO_UPDATE_PRESTIGE2
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

export const updateEkia1 = (ekia1) => {
    return {
        type: USER_INFO_UPDATE_EKIA1,
        payload: ekia1
    };
}

export const updateEkia2 = (ekia2) => {
    return {
        type: USER_INFO_UPDATE_EKIA2,
        payload: ekia2
    };
}

export const updateKills1 = (kills1) => {
    return {
        type: USER_INFO_UPDATE_KILLS1,
        payload: kills1
    };
}

export const updateKills2 = (kills2) => {
    return {
        type: USER_INFO_UPDATE_KILLS2,
        payload: kills2
    };
}

export const updateDeaths1 = (deaths1) => {
    return {
        type: USER_INFO_UPDATE_DEATHS1,
        payload: deaths1
    };
}

export const updateDeaths2 = (deaths2) => {
    return {
        type: USER_INFO_UPDATE_DEATHS2,
        payload: deaths2
    };
}

export const updateWins1 = (wins1) => {
    return {
        type: USER_INFO_UPDATE_WINS1,
        payload: wins1
    };
}

export const updateWins2 = (wins2) => {
    return {
        type: USER_INFO_UPDATE_WINS2,
        payload: wins2
    };
}

export const updateLosses1 = (losses1) => {
    return {
        type: USER_INFO_UPDATE_LOSSES1,
        payload: losses1
    };
}

export const updateLosses2 = (losses2) => {
    return {
        type: USER_INFO_UPDATE_LOSSES2,
        payload: losses2
    };
}

export const updateLongestKillstreak1 = (longestKillstreak1) => {
    return {
        type: USER_INFO_UPDATE_LONGESTKILLSTREAK1,
        payload: longestKillstreak1
    };
}

export const updateLongestKillstreak2 = (longestKillstreak2) => {
    return {
        type: USER_INFO_UPDATE_LONGESTKILLSTREAK2,
        payload: longestKillstreak2
    };
}

export const updateEkiaPerGame1 = (ekiapergame1) => {
    return {
        type: USER_INFO_UPDATE_EKIAPERGAME1,
        payload: ekiapergame1
    };
}

export const updateEkiaPerGame2 = (ekiapergame2) => {
    return {
        type: USER_INFO_UPDATE_EKIAPERGAME2,
        payload: ekiapergame2
    };
}

export const updateScorePerMinute1 = (scoreperminute1) => {
    return {
        type: USER_INFO_UPDATE_SCOREPERMINUTE1,
        payload: scoreperminute1
    };
}

export const updateScorePerMinute2 = (scoreperminute2) => {
    return {
        type: USER_INFO_UPDATE_SCOREPERMINUTE2,
        payload: scoreperminute2
    };
}

export const updateIsLoading1 = (isLoading1) => {
    return {
        type: USER_INFO_IS_LOADING1,
        payload: isLoading1
    };
}

export const updateIsLoading2 = (isLoading2) => {
    return {
        type: USER_INFO_IS_LOADING2,
        payload: isLoading2
    };
}

export const updateGamesPlayed1 = (gamesplayed1) => {
    return {
        type: USER_INFO_UPDATE_GAMESPLAYED1,
        payload: gamesplayed1
    };
}

export const updateGamesPlayed2 = (gamesplayed2) => {
    return {
        type: USER_INFO_UPDATE_GAMESPLAYED2,
        payload: gamesplayed2
    }
}

export const updateLevel1 = (level1) => {
    return {
        type: USER_INFO_UPDATE_LEVEL1,
        payload: level1
    }
}

export const updateLevel2 = (level2) => {
    return {
        type: USER_INFO_UPDATE_LEVEL2,
        payload: level2
    }
}

export const updatePrestige1 = (prestige1) => {
    return {
        type: USER_INFO_UPDATE_PRESTIGE1,
        payload: prestige1
    }
}

export const updatePrestige2 = (prestige2) => {
    return {
        type: USER_INFO_UPDATE_PRESTIGE2,
        payload: prestige2
    }
}