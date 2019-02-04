import React, { Component } from 'react';
import Stats from './Stats';
import '../App.css';
import Header from './Header/Header';
import { connect } from 'react-redux';
import { updateIsLoading } from '../Actions/UserInfo';
import Oops from '../Helpers/Oops';

class Login extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(updateIsLoading(true));
  }

  render() {
    const {username, success, ekia, kills, deaths, isLoading, wins, losses, longestKillstreak, ekiapergame, scoreperminute,
      tdmwins, tdmdeaths, tdmkills, tdmlosses,
      domwins, domdeaths, domkills, domlosses, domoffends, domdefends, domkillstreak, isValid
    } = this.props;
      
    if(isLoading){
      return (
        <div>
          <Header/>
          <p className="loading">Loading<span>.</span><span>.</span><span>.</span></p>
        </div>
      )
    }
      
    if(!isLoading && success){
      return (
        <div>
          <Header/>
          <div>
            <Stats isValid={isValid} username={username} ekia={ekia} kills={kills} deaths={deaths} wins={wins} losses={losses} longestkillstreak={longestKillstreak} ekiapergame={ekiapergame} scoreperminute={scoreperminute}
              tdmkills={tdmkills} tdmdeaths={tdmdeaths} tdmwins={tdmwins} tdmlosses={tdmlosses}
              domkills={domkills} domdeaths={domdeaths} domwins={domwins} domlosses={domlosses} domoffends={domoffends} domdefends={domdefends} domkillstreak={domkillstreak} 
            />
          </div>
        </div>
      )
    }
      
    if(!success) {
      return (
        <div>
          <Oops/>
        </div>
      )
    }
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
    domkillstreak: state.UserInfo.domkillstreak,
    isLoading: state.UserInfo.isLoading,
    success: state.GetUser.success
  }
}

export default connect(mapStateToProps)(Login);
