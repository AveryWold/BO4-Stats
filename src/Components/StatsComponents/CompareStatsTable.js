import React, { Component } from 'react';
import { Table, Tbody, Tr, Td, Thead, Th } from 'react-super-responsive-table';
import '../../Styles/Stats.css';

class CompareStats extends Component {
    render() {
        let kd1 = (this.props.ekia1 / this.props.deaths1).toFixed(2);
        let kd2 = (this.props.ekia2 / this.props.deaths2).toFixed(2);
        let wl1 = (this.props.wins1 / this.props.losses1).toFixed(2);
        let wl2 = (this.props.wins2 / this.props.losses2).toFixed(2);
        let epg1 = Math.round(this.props.ekiapergame1*100)/100;
        let epg2 = Math.round(this.props.ekiapergame2*100)/100;
        let spm1 = (Math.round(this.props.scoreperminute1*100)/100).toFixed(2);
        let spm2 = (Math.round(this.props.scoreperminute2*100)/100).toFixed(2);

        return(
            <div>
                <Table className="CompareTable">
                    <Thead>
                        <Tr>
                            <Th>STATS</Th>
                            <Th>{this.props.username1}</Th>
                            <Th>{this.props.username2}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr >
                            <Td className="border">PRESTIGE</Td>
                            <Td className="border1">{this.props.prestige1}</Td>
                            <Td className="border1">{this.props.prestige2}</Td>
                        </Tr>
                        <Tr >
                            <Td className="border">RANK</Td>
                            <Td className="border1">{this.props.level1}</Td>
                            <Td className="border1">{this.props.level2}</Td>
                        </Tr>
                        <Tr >
                            <Td className="border">EKIA</Td>
                            <Td className="border1">{this.props.ekia1}</Td>
                            <Td className="border1">{this.props.ekia2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">KILLS</Td>
                            <Td className="border1">{this.props.kills1}</Td>
                            <Td className="border1">{this.props.kills2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">DEATHS</Td>
                            <Td className="border1">{this.props.deaths1}</Td>
                            <Td className="border1">{this.props.deaths2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">LONGEST KILLSTREAK</Td>
                            <Td className="border1">{this.props.longestkillstreak1}</Td>
                            <Td className="border1">{this.props.longestkillstreak2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">SCORE PER MINUTE</Td>
                            <Td className="border1">{spm1}</Td>
                            <Td className="border1">{spm2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">EKIA PER GAME</Td>
                            <Td className="border1">{epg1}</Td>
                            <Td className="border1">{epg2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">EKIA/DEATH RATIO</Td>
                            <Td className="border1">{kd1}</Td>
                            <Td className="border1">{kd2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">WINS</Td>
                            <Td className="border1">{this.props.wins1}</Td>
                            <Td className="border1">{this.props.wins2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">LOSSES</Td>
                            <Td className="border1">{this.props.losses1}</Td>
                            <Td className="border1">{this.props.losses2}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">WIN/LOSS RATIO</Td>
                            <Td className="border1">{wl1}</Td>
                            <Td className="border1">{wl2}</Td>
                        </Tr>
                        <Tr>
                            <Td>GAMES PLAYED</Td>
                            <Td className="bottom">{this.props.gamesplayed1}</Td>
                            <Td className="bottom">{this.props.gamesplayed2}</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <br></br>
            </div>
        );
    }
}

export default CompareStats;