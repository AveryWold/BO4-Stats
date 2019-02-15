import {
    GET_STATS_IS_FETCHING1,
    GET_STATS_HAS_ERRORS1,
    GET_STATS_IS_SUCCESSFUL1,
    GET_STATS_IS_FETCHING2,
    GET_STATS_HAS_ERRORS2,
    GET_STATS_IS_SUCCESSFUL2    
}from '../Reducers/GetCompareStats';
import axios from 'axios';
import { updateEkia1, 
         updateKills1, 
         updateDeaths1, 
         updateWins1, 
         updateLongestKillstreak1, 
         updateEkiaPerGame1, 
         updateScorePerMinute1,  
         updateLosses1, 
         updateIsLoading1,
         updateEkia2, 
         updateKills2, 
         updateDeaths2, 
         updateWins2, 
         updateLongestKillstreak2, 
         updateEkiaPerGame2, 
         updateScorePerMinute2,  
         updateLosses2, 
         updateIsLoading2,
         updateGamesPlayed1,
         updateGamesPlayed2,
         updateLevel1,
         updateLevel2,
         updatePrestige1,
         updatePrestige2
        } from './CompareInfo';

const statsIsFetching1 = () => {
    return {
        type: GET_STATS_IS_FETCHING1,
    }
}

const statsHasErrors1 = () => {
    return {
        type: GET_STATS_HAS_ERRORS1
    }
}

const statsIsSuccessful1 = (data) => {
    return {
        type: GET_STATS_IS_SUCCESSFUL1,
        payload: data
    }
}

const statsIsFetching2 = () => {
    return {
        type: GET_STATS_IS_FETCHING2,
    }
}

const statsHasErrors2 = () => {
    return {
        type: GET_STATS_HAS_ERRORS2
    }
}

const statsIsSuccessful2 = (data) => {
    return {
        type: GET_STATS_IS_SUCCESSFUL2,
        payload: data
    }
}

const statsFetchData1 = (url) => {
    return (dispatch) => {
        dispatch(statsIsFetching1());
        axios.get(url) //, {timeout:10000})
        .then(json => (
          {
            username1: json.data.data.username,
            level1: json.data.data.mp.level,
            prestige1: json.data.data.mp.prestige,
            ekia1: json.data.data.mp.lifetime.all.ekia,
            kills1: json.data.data.mp.lifetime.all.kills,
            deaths1: json.data.data.mp.lifetime.all.deaths,
            wins1: json.data.data.mp.lifetime.all.wins,
            losses1: json.data.data.mp.lifetime.all.losses,
            longestKillstreak1: json.data.data.mp.lifetime.all.longestKillstreak,
            ekiapergame1: json.data.data.mp.lifetime.all.ekiaPerGame,
            scoreperminute1: json.data.data.mp.lifetime.all.scorePerMinute,
            gamesplayed1: json.data.data.mp.lifetime.all.totalGamesPlayed
          }))
            .then((newData) => {
                dispatch(updateLevel1(newData.level1));
                dispatch(updatePrestige1(newData.prestige1));
                dispatch(updateEkia1(newData.ekia1));
                dispatch(updateKills1(newData.kills1));
                dispatch(updateDeaths1(newData.deaths1));
                dispatch(updateWins1(newData.wins1));
                dispatch(updateLosses1(newData.losses1));
                dispatch(updateLongestKillstreak1(newData.longestKillstreak1));
                dispatch(updateEkiaPerGame1(newData.ekiapergame1));
                dispatch(updateScorePerMinute1(newData.scoreperminute1));
                dispatch(updateGamesPlayed1(newData.gamesplayed1));
                dispatch(statsIsSuccessful1(newData));
                dispatch(updateIsLoading1(false));
            })
            .catch(() => {
                dispatch(statsHasErrors1());
            })
    };
}

const statsFetchData2 = (url) => {
    return (dispatch) => {
        dispatch(statsIsFetching2());
        axios.get(url) //, {timeout:10000})
        .then(json => (
          {
            username2: json.data.data.username,
            level2: json.data.data.mp.level,
            prestige2: json.data.data.mp.prestige,
            ekia2: json.data.data.mp.lifetime.all.ekia,
            kills2: json.data.data.mp.lifetime.all.kills,
            deaths2: json.data.data.mp.lifetime.all.deaths,
            wins2: json.data.data.mp.lifetime.all.wins,
            losses2: json.data.data.mp.lifetime.all.losses,
            longestKillstreak2: json.data.data.mp.lifetime.all.longestKillstreak,
            ekiapergame2: json.data.data.mp.lifetime.all.ekiaPerGame,
            scoreperminute2: json.data.data.mp.lifetime.all.scorePerMinute,
            gamesplayed2: json.data.data.mp.lifetime.all.totalGamesPlayed
          }))
            .then((newData) => {
                dispatch(updateLevel2(newData.level2));
                dispatch(updatePrestige2(newData.prestige2));
                dispatch(updateEkia2(newData.ekia2));
                dispatch(updateKills2(newData.kills2));
                dispatch(updateDeaths2(newData.deaths2));
                dispatch(updateWins2(newData.wins2));
                dispatch(updateLosses2(newData.losses2));
                dispatch(updateLongestKillstreak2(newData.longestKillstreak2));
                dispatch(updateEkiaPerGame2(newData.ekiapergame2));
                dispatch(updateScorePerMinute2(newData.scoreperminute2));
                dispatch(updateGamesPlayed2(newData.gamesplayed2));
                dispatch(statsIsSuccessful2(newData));
                dispatch(updateIsLoading2(false));
            })
            .catch(() => {
                dispatch(statsHasErrors2());
            })
    };
}

export const getCompareStats1 = (username1) => {
    const url = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/psn/gamer/' + username1 + '/profile/';
    return statsFetchData1(url);
}

export const getCompareStats2 = (username2) => {
    const url = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/psn/gamer/' + username2 + '/profile/';
    return statsFetchData2(url);
}