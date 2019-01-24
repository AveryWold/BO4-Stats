import React, { Component } from 'react';
import axios from 'axios';
import Stats from './Stats';
import '../App.css';
import Header from './Header/Header';
import { getStats } from '../Actions/GetStats';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props){
    super(props)
        this.state = {
          isLoading: true
        };
  }

  // getStats() {
  //   const {username} = this.props.history.location.state;
  //   this.setState({isLoading: true});
  //   const url = 'https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/psn/gamer/' + username + '/profile/'
  //   axios.get(url) //, {timeout:10000})
  //   .then(json => (
  //     {
  //       username: json.data.data.username,
  //       ekia: json.data.data.mp.lifetime.all.ekia,
  //       kills: json.data.data.mp.lifetime.all.kills,
  //       deaths: json.data.data.mp.lifetime.all.deaths,
  //       wins: json.data.data.mp.lifetime.all.wins,
  //       losses: json.data.data.mp.lifetime.all.losses,
  //       longestKillstreak: json.data.data.mp.lifetime.all.longestKillstreak,
  //       ekiapergame: json.data.data.mp.lifetime.all.ekiaPerGame,
  //       scoreperminute: json.data.data.mp.lifetime.all.scorePerMinute,

  //       tdmkills: json.data.data.mp.lifetime.mode.tdm.kills,
  //       tdmdeaths: json.data.data.mp.lifetime.mode.tdm.deaths,
  //       tdmwins: json.data.data.mp.lifetime.mode.tdm.wins,
  //       tdmlosses: json.data.data.mp.lifetime.mode.tdm.losses,

  //       domkills: json.data.data.mp.lifetime.mode.dom.kills,
  //       domdeaths: json.data.data.mp.lifetime.mode.dom.deaths,
  //       domwins: json.data.data.mp.lifetime.mode.dom.wins,
  //       domlosses: json.data.data.mp.lifetime.mode.dom.losses,
  //       domdefends: json.data.data.mp.lifetime.mode.dom.defends,
  //       domoffends: json.data.data.mp.lifetime.mode.dom.offends,
  //       domkillstreak: json.data.data.mp.lifetime.mode.dom.killStreak,
  //     }))
  //   .then(newData => this.setState({username: newData.username, 
  //                                   ekia: newData.ekia, 
  //                                   kills: newData.kills,
  //                                   deaths: newData.deaths, 
  //                                   wins: newData.wins, 
  //                                   losses: newData.losses, 
  //                                   longestKillstreak: newData.longestKillstreak, 
  //                                   ekiapergame: newData.ekiapergame,
  //                                   scoreperminute: newData.scoreperminute,

  //                                   tdmkills: newData.tdmkills, 
  //                                   tdmdeaths: newData.tdmdeaths, 
  //                                   tdmwins: newData.tdmwins, 
  //                                   tdmlosses: newData.tdmlosses,

  //                                   domkills: newData.domkills,
  //                                   domdeaths: newData.domdeaths,
  //                                   domwins: newData.domwins,
  //                                   domlosses: newData.domlosses,
  //                                   domdefends: newData.domdefends,
  //                                   domoffends: newData.domoffends,
  //                                   domkillstreak: newData.domkillstreak,
  //                                   isLoading: false
  //     }))
  //   .catch(error => alert(error))
  // }

  componentDidMount(){
    this.setState({isLoading: true});
    const { dispatch } = this.props;
    const {username} = this.props.history.location.state;
    dispatch(getStats(username));
    this.checkForLoading();
  }

  checkForLoading() {
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", this.props.wins);
    if(this.props.wins != null){
      this.setState({isLoading: false});
      console.log("Wins is NULL");
    }
  }

  render() {
    const {username, ekia, kills, deaths, isLoading, wins, losses, longestKillstreak, ekiapergame, scoreperminute,
            tdmwins, tdmdeaths, tdmkills, tdmlosses,
            domwins, domdeaths, domkills, domlosses, domoffends, domdefends, domkillstreak} = this.props;

    return (
      <div>
          <Header/>
          <div>
            {!isLoading ? (
                <div>
                  <Stats username={username} ekia={ekia} kills={kills} deaths={deaths} wins={wins} losses={losses} longestkillstreak={longestKillstreak} ekiapergame={ekiapergame} scoreperminute={scoreperminute}
                         tdmkills={tdmkills} tdmdeaths={tdmdeaths} tdmwins={tdmwins} tdmlosses={tdmlosses}
                         domkills={domkills} domdeaths={domdeaths} domwins={domwins} domlosses={domlosses} domoffends={domoffends} domdefends={domdefends} domkillstreak={domkillstreak} 
                  />
                </div>
            ) : (
              <p className="loading">Loading<span>.</span><span>.</span><span>.</span></p>
            )}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.UserInfo.username,
    ekia: state.UserInfo.ekia,
    kills: state.UserInfo.kills,
    deaths: state.UserInfo.deaths,
    wins: state.UserInfo.wins,
    losses: state.UserInfo.losses,
    longestKillstreak: state.UserInfo.longestKillstreak,
    ekiapergame: state.UserInfo.ekiapergame,
    scoreperminute: state.UserInfo.scoreperminute,
    tdmkills: state.UserInfo.tdmkills,
    tdmdeaths: state.UserInfo.tdmdeaths,
    tdmwins: state.UserInfo.tdmwins,
    tdmlosses:state.UserInfo.tdmlosses,
    domkills: state.UserInfo.domkills,
    domdeaths: state.UserInfo.domdeaths,
    domwins: state.UserInfo.domwins,
    domlosses: state.UserInfo.domlosses,
    domdefends: state.UserInfo.domdefends,
    domoffends: state.UserInfo.domoffends,
    domkillstreak: state.UserInfo.domkillstreak
  }
}

export default connect(mapStateToProps)(Login);
