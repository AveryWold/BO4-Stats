import React, { Component } from 'react';
import axios from 'axios';
import Stats from './Stats';
import '../App.css';

class Login extends Component {
  constructor(props){
    super(props)
        this.state = {
            ekia: null,
            kills: null,
            deaths: null,
            isLoading: false,
            wins: null,
            losses: null,
            longestKillstreak: null,
            ekiapergame: null,
            scoreperminute: null,
            tdmkills: null,
            tdmdeaths: null,
            tdmwins: null,
            tdmlosses:null,
            domkills: null,
            domdeaths: null,
            domwins: null,
            domlosses: null,
            domdefends: null,
            domoffends: null,
            domkillstreak: null
        };
  }

  getStats() {
    const {username} = this.props;
    this.setState({isLoading: true});
    const url = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/psn/gamer/' + username + '/profile/'
    axios.get(url, {timeout:1000})
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
    .then(newData => this.setState({username: newData.username, 
                                    ekia: newData.ekia, 
                                    kills: newData.kills,
                                    deaths: newData.deaths, 
                                    wins: newData.wins, 
                                    losses: newData.losses, 
                                    longestKillstreak: newData.longestKillstreak, 
                                    ekiapergame: newData.ekiapergame,
                                    scoreperminute: newData.scoreperminute,

                                    tdmkills: newData.tdmkills, 
                                    tdmdeaths: newData.tdmdeaths, 
                                    tdmwins: newData.tdmwins, 
                                    tdmlosses: newData.tdmlosses,

                                    domkills: newData.domkills,
                                    domdeaths: newData.domdeaths,
                                    domwins: newData.domwins,
                                    domlosses: newData.domlosses,
                                    domdefends: newData.domdefends,
                                    domoffends: newData.domoffends,
                                    domkillstreak: newData.domkillstreak,
                                    isLoading: false
      }))
    .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getStats();
  }

  render() {
    const {username, ekia, kills, deaths, isLoading, wins, losses, longestKillstreak, ekiapergame, scoreperminute,
            tdmwins, tdmdeaths, tdmkills, tdmlosses,
            domwins, domdeaths, domkills, domlosses, domoffends, domdefends, domkillstreak} = this.state;

    return (
      <div>
          <div>
            {!isLoading ? (
                <div>
                  <Stats username={username} ekia={ekia} kills={kills} deaths={deaths} wins={wins} losses={losses} longestkillstreak={longestKillstreak} ekiapergame={ekiapergame} scoreperminute={scoreperminute}
                         tdmkills={tdmkills} tdmdeaths={tdmdeaths} tdmwins={tdmwins} tdmlosses={tdmlosses}
                         domkills={domkills} domdeaths={domdeaths} domwins={domwins} domlosses={domlosses} domoffends={domoffends} domdefends={domdefends} domkillstreak={domkillstreak} />
                </div>
            ) : (
              <p className="loading">Loading...</p>
            )}
          </div>
      </div>
    );
  }
}
export default Login;
