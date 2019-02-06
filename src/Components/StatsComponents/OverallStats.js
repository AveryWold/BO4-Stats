import React, { Component } from 'react';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import '../../Styles/Stats.css';

class OverallStats extends Component {
    render() {
        let kd = (this.props.ekia / this.props.deaths).toFixed(2);
        let wl = (this.props.wins / this.props.losses).toFixed(2);
        let epg = Math.round(this.props.ekiapergame*100)/100;
        let spm = (Math.round(this.props.scoreperminute*100)/100).toFixed(2);

        return(
            <div>
                <Table>
                    <caption>Overall</caption>
                    <Tbody>
                        <Tr >
                            <Td className="border">EKIA</Td>
                            <Td className="border1">{this.props.ekia}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">KILLS</Td>
                            <Td className="border1">{this.props.kills}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">DEATHS</Td>
                            <Td className="border1">{this.props.deaths}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">LONGEST KILLSTREAK</Td>
                            <Td className="border1">{this.props.longestkillstreak}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">SCORE PER MINUTE</Td>
                            <Td className="border1">{spm}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">EKIA PER GAME</Td>
                            <Td className="border1">{epg}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">EKIA/DEATH RATIO</Td>
                            <Td className="border1">{kd}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">WINS</Td>
                            <Td className="border1">{this.props.wins}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">LOSSES</Td>
                            <Td className="border1">{this.props.losses}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">WIN/LOSS RATIO</Td>
                            <Td className="border1">{wl}</Td>
                        </Tr>
                        <Tr>
                            <Td>GAMES PLAYED</Td>
                            <Td className="bottom">{this.props.gamesplayed}</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <br></br>
            </div>
        );
    }
}

export default OverallStats;