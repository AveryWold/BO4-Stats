import React, { Component } from 'react';
// import '../Styles/Stats.css';
import CompareStatsTable from '../StatsComponents/CompareStatsTable';
import '../../Styles/Stats.css';

class CompareStats extends Component {
  render() {
    const {username1, ekia1, kills1, deaths1, wins1, losses1, ekiapergame1, scoreperminute1, gamesplayed1,
           username2, ekia2, kills2, deaths2, wins2, losses2, ekiapergame2, scoreperminute2, gamesplayed2} = this.props;
    return (
        <div className="stats-table">
            <CompareStatsTable username1={username1} ekia1={ekia1} kills1={kills1} deaths1={deaths1} wins1={wins1} 
                losses1={losses1} longestkillstreak1={this.props.longestkillstreak1} ekiapergame1={ekiapergame1} 
                scoreperminute1={scoreperminute1} gamesplayed1={gamesplayed1}
                username2={username2} ekia2={ekia2} kills2={kills2} deaths2={deaths2} wins2={wins2} losses2={losses2} 
                longestkillstreak2={this.props.longestkillstreak2} ekiapergame2={ekiapergame2} scoreperminute2={scoreperminute2}
                gamesplayed2={gamesplayed2} 
            />
        </div>
    );
  }
}

export default(CompareStats);