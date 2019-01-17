import React, { Component } from 'react';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import '../../Styles/Stats.css';

class DOMStats extends Component {
    render() {
        let kd = (this.props.domkills / this.props.domdeaths).toFixed(2);
        let wl = (this.props.domwins / this.props.domlosses).toFixed(2);
        return(
            <div>
                <Table className="Table2">
                   <caption>Domination</caption>
                    <Tbody>
                        <Tr>
                            <Td className="border">KILLS</Td>
                            <Td className="border">{this.props.domkills}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">DEATHS</Td>
                            <Td className="border">{this.props.domdeaths}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">K/D</Td>
                            <Td className="border">{kd}</Td>
                        </Tr>
                        {/* <Tr>
                            <Td className="border">LONGEST KILLSTREAK</Td>
                            <Td className="border">{this.props.domkillstreak}</Td>
                        </Tr> */}
                        <Tr>
                            <Td className="border">DEFENDS</Td>
                            <Td className="border">{this.props.domdefends}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">CAPTURES</Td>
                            <Td className="border">{this.props.domoffends}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">WINS</Td>
                            <Td className="border">{this.props.domwins}</Td>
                        </Tr>
                        <Tr>
                            <Td className="border">LOSSES</Td>
                            <Td className="border">{this.props.domlosses}</Td>
                        </Tr>
                        <Tr>
                            <Td>W/L</Td>
                            <Td>{wl}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        );
    }
}

export default DOMStats;