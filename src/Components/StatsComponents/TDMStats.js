import React, { Component } from 'react';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import '../../Styles/Stats.css';

class TDMStats extends Component {
    render() {
        let kd = (this.props.tdmkills / this.props.tdmdeaths).toFixed(2);
        let wl = (this.props.tdmwins / this.props.tdmlosses).toFixed(2);
        return(
            <div>
                <Table className="Table2">
                <caption>Team Deathmatch</caption>
                    <Tbody>
                        <Tr>
                            <Td className="border">KILLS</Td>
                            <Td className="border">{this.props.tdmkills}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">DEATHS</Td>
                            <Td className="border">{this.props.tdmdeaths}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">K/D</Td>
                            <Td className="border">{kd}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">WINS</Td>
                            <Td className="border">{this.props.tdmwins}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">LOSSES</Td>
                            <Td className="border">{this.props.tdmlosses}</Td>
                        </Tr>
                        <Tr>
                            <Td>W/L</Td>
                            <Td>{wl}</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <br></br>
            </div>
        );
    }
}

export default TDMStats;