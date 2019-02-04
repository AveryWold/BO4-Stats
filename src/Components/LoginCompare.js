import React, { Component } from 'react';
import '../App.css';
import Header from './Header/Header';
import { connect } from 'react-redux';
import { updateIsLoading1, updateIsLoading2 } from '../Actions/CompareInfo';
import CompareOops from '../Helpers/CompareOops';
import CompareStats from './Compare/CompareStats';

class LoginCompare extends Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(updateIsLoading1(true));
    dispatch(updateIsLoading2(true));
  }

  render() {
    const {username1, success1, ekia1, kills1, deaths1, isLoading1, wins1, losses1, longestKillstreak1, ekiapergame1, scoreperminute1, gamesplayed1,
      username2, success2, ekia2, kills2, deaths2, isLoading2, wins2, losses2, longestKillstreak2, ekiapergame2, scoreperminute2, gamesplayed2, isValid
    } = this.props;
    
    if(isLoading1 || isLoading2){
      return (
        <div>
          <Header/>
          <p className="loading">Loading<span>.</span><span>.</span><span>.</span></p>
        </div>
      )
    }

    if(!isLoading1 && success1 && !isLoading2 && success2){
      return (
        <div>
          <Header/>
          <div>
            <CompareStats isValid={isValid} username1={username1} ekia1={ekia1} kills1={kills1} deaths1={deaths1} wins1={wins1} 
              losses1={losses1} longestkillstreak1={longestKillstreak1} ekiapergame1={ekiapergame1} 
              scoreperminute1={scoreperminute1} gamesplayed1={gamesplayed1}
              username2={username2} ekia2={ekia2} kills2={kills2} deaths2={deaths2} wins2={wins2} losses2={losses2} 
              longestkillstreak2={longestKillstreak2} ekiapergame2={ekiapergame2} scoreperminute2={scoreperminute2} gamesplayed2={gamesplayed2}
            />
          </div>
        </div>
      )
    }
      
    if(!success1 || !success2) {
      return (
        <div>
          <CompareOops/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    username1: state.CompareInfo.username1,
    ekia1: state.CompareInfo.ekia1,
    kills1: state.CompareInfo.kills1,
    deaths1: state.CompareInfo.deaths1,
    wins1: state.CompareInfo.wins1,
    losses1: state.CompareInfo.losses1,
    longestKillstreak1: state.CompareInfo.longestKillstreak1,
    ekiapergame1: state.CompareInfo.ekiapergame1,
    scoreperminute1: state.CompareInfo.scoreperminute1,
    isLoading1: state.CompareInfo.isLoading1,
    username2: state.CompareInfo.username2,
    ekia2: state.CompareInfo.ekia2,
    kills2: state.CompareInfo.kills2,
    deaths2: state.CompareInfo.deaths2,
    wins2: state.CompareInfo.wins2,
    losses2: state.CompareInfo.losses2,
    longestKillstreak2: state.CompareInfo.longestKillstreak2,
    ekiapergame2: state.CompareInfo.ekiapergame2,
    scoreperminute2: state.CompareInfo.scoreperminute2,
    isLoading2: state.CompareInfo.isLoading2,
    success1: state.GetUser.success1,
    success2: state.GetUser.success2,
    gamesplayed1: state.CompareInfo.gamesplayed1,
    gamesplayed2: state.CompareInfo.gamesplayed2
  }
}

export default connect(mapStateToProps)(LoginCompare);
