import {
    GET_STATS_IS_FETCHING,
    GET_STATS_HAS_ERRORS,
    GET_STATS_IS_SUCCESSFUL    
}from '../Reducers/GetStats';
import axios from 'axios';
import { updateEkia, 
         updateKills, 
         updateDeaths, 
         updateWins, 
         updateLongestKillstreak, 
         updateEkiaPerGame, 
         updateScorePerMinute, 
         updateTdmKills, 
         updateTdmDeaths, 
         updateTdmWins,
         updateTdmLosses, 
         updateDomKills, 
         updateDomDeaths, 
         updateDomWins, 
         updateDomLosses, 
         updateDomDefends, 
         updateDomOffends, 
         updateDomKillstreak, 
         updateLosses, 
         updateIsLoading,
         updateGamesPlayed
        } from './UserInfo';

const statsIsFetching = () => {
    return {
        type: GET_STATS_IS_FETCHING,
    }
}

const statsHasErrors = () => {
    return {
        type: GET_STATS_HAS_ERRORS
    }
}

const statsIsSuccessful = (data) => {
    return {
        type: GET_STATS_IS_SUCCESSFUL,
        payload: data
    }
}

const statsFetchData = (url) => {
    return (dispatch) => {
        dispatch(statsIsFetching());
        axios.get(url) //, {timeout:10000})
        .then(json => (
          {
            username: json.data.data.username,
            ekia: json.data.data.mp.lifetime.all.ekia,
            kills: json.data.data.mp.lifetime.all.kills,
            deaths: json.data.data.mp.lifetime.all.deaths,
            wins: json.data.data.mp.lifetime.all.wins,
            losses: json.data.data.mp.lifetime.all.losses,
            longestKillstreak: json.data.data.mp.lifetime.all.longestKillstreak,
            ekiapergame: json.data.data.mp.lifetime.all.ekiaPerGame,
            scoreperminute: json.data.data.mp.lifetime.all.scorePerMinute,
            gamesplayed: json.data.data.mp.lifetime.all.totalGamesPlayed,
    
            tdmkills: json.data.data.mp.lifetime.mode.tdm.kills,
            tdmdeaths: json.data.data.mp.lifetime.mode.tdm.deaths,
            tdmwins: json.data.data.mp.lifetime.mode.tdm.wins,
            tdmlosses: json.data.data.mp.lifetime.mode.tdm.losses,
    
            domkills: json.data.data.mp.lifetime.mode.dom.kills,
            domdeaths: json.data.data.mp.lifetime.mode.dom.deaths,
            domwins: json.data.data.mp.lifetime.mode.dom.wins,
            domlosses: json.data.data.mp.lifetime.mode.dom.losses,
            domdefends: json.data.data.mp.lifetime.mode.dom.defends,
            domoffends: json.data.data.mp.lifetime.mode.dom.offends,
            domkillstreak: json.data.data.mp.lifetime.mode.dom.killStreak,
          }))
            .then((newData) => {
                dispatch(updateEkia(newData.ekia));
                dispatch(updateKills(newData.kills));
                dispatch(updateDeaths(newData.deaths));
                dispatch(updateWins(newData.wins));
                dispatch(updateLosses(newData.losses));
                dispatch(updateLongestKillstreak(newData.longestKillstreak));
                dispatch(updateEkiaPerGame(newData.ekiapergame));
                dispatch(updateScorePerMinute(newData.scoreperminute));
                dispatch(updateGamesPlayed(newData.gamesplayed));

                dispatch(updateTdmKills(newData.tdmkills));
                dispatch(updateTdmDeaths(newData.tdmdeaths));
                dispatch(updateTdmWins(newData.tdmwins));
                dispatch(updateTdmLosses(newData.tdmlosses));

                dispatch(updateDomKills(newData.domkills));
                dispatch(updateDomDeaths(newData.domdeaths));
                dispatch(updateDomWins(newData.domwins));
                dispatch(updateDomLosses(newData.domlosses));
                dispatch(updateDomDefends(newData.domdefends));
                dispatch(updateDomOffends(newData.domoffends));
                dispatch(updateDomKillstreak(newData.domkillstreak));
                dispatch(statsIsSuccessful(newData));
                dispatch(updateIsLoading(false));
            })
            .catch(() => {
                dispatch(statsHasErrors());
            })
    };
}

export const getStats = (username) => {
    const url = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/psn/gamer/' + username + '/profile/';
    return statsFetchData(url);
}