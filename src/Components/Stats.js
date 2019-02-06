import React, { Component } from 'react';
import '../Styles/Stats.css';
import OverallStats from './StatsComponents/OverallStats';
import TDMStats from './StatsComponents/TDMStats';
import DOMStats from './StatsComponents/DOMStats';

class Stats extends Component {
  render() {
    const {username, ekia, kills, deaths, wins, losses, ekiapergame, scoreperminute, gamesplayed,
      tdmwins, tdmdeaths, tdmkills, tdmlosses,
      domwins, domdeaths, domkills, domlosses, domoffends, domdefends, domkillstreak
    } = this.props;
    
    return (
      <div className="stats-table">
        <h1>
          {'User Stats for: ' + username}
        </h1>
        <OverallStats ekia={ekia} kills={kills} deaths={deaths} wins={wins} losses={losses} longestkillstreak={this.props.longestkillstreak} ekiapergame={ekiapergame} scoreperminute={scoreperminute} gamesplayed={gamesplayed} />
        <TDMStats  tdmkills={tdmkills} tdmdeaths={tdmdeaths} tdmwins={tdmwins} tdmlosses={tdmlosses} />
        <DOMStats domkills={domkills} domdeaths={domdeaths} domwins={domwins} domlosses={domlosses} domoffends={domoffends} domdefends={domdefends} domkillstreak={domkillstreak} />
      </div>
    );
  }
}

export default(Stats);