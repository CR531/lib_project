import React, { Component } from "react";
import data from "./data.json";
import Select from 'react-select';
import "./index.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Cspace_Logo from "./Images/Cspace_Logo.jpg";

const options = [
    { value: 'Windows_7_PC', label: 'Windows 7 PC' },
    { value: 'Mac_AL_CSM_01', label: 'AL CSM 01 Mac' }
];
class Cspace extends Component {
    constructor() {
        super();
        this.state = {
            data,
            selectedOption: ""
        }
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        console.log(data);
        return (<div>
            <div>
                <img className="logo_div_css" align="center" height="80%" width="50%" src={Cspace_Logo} alt="CSpace Logo" />
            </div>
            <div>
                <div>
                    <h2> C - Space </h2>
                    <p> The Creation Space(C - Space) is an area
            for collaboration and experimentation where Wichita State University students, faculty, and staff can come together to learn, collaborate and work with advanced media technologies on a variety of projects.C - Space promotes a superior user experience through innovative services that support the educational, cultural, and research needs of the University and its community partners. </p>
                    <p> C - Space is located on the first floor of Ablah Library! </p>
                    <ol>
                        <li> C - Space Hours: </li>
                        <li> Monday - Thursday: 08: 00 AM to 10: 00 PM </li>
                        <li> Friday: 08: 00 AM to 07: 00 PM </li>
                        <li> Saturday: 01: 00 PM to 07: 00 PM </li>
                        <li> Sunday: 01: 00 PM to 09: 00 PM </li>
                    </ol>
                </div>
                <p><h3>Available Software List</h3></p>
                <div class="cspace_select">
                    <Select
                        label="Available Software List"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    /> </div>
                <br />
                {this.state.selectedOption.value === "Windows_7_PC" && this.state.data.ablah_data.Windows_7_PC.map((e, i) =>
                    <Paper className="paper_css">
                        <Table className="table_css">
                            <TableBody>
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {e}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                )}
                {this.state.selectedOption.value === "Mac_AL_CSM_01" && this.state.data.ablah_data.Mac_AL_CSM_01.map((e, i) =>
                    <Paper className="paper_css">
                        <Table className="table_css">
                            <TableBody>
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {e}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                )}
            </div>
            <div></div>
        </div>
        )
    }
}
export default Cspace;