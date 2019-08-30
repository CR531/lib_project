import React, { Component } from "react";
import data from "./data.json";
import Select from 'react-select';
import "./index.css";
const options = [
    { value: 'Windows_7_PC', label: 'Windows 7 PC' },
    { value: 'Mac_AL_CSM_01', label: 'AL CSM 01 Mac' }
];
class Cspace extends Component {
    constructor() {
        super();
        this.state = {
            data,
            selectedOption: null
        }
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        console.log(data);
        return (
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
                    {/* {this.state.data && this.state.data.ablah_data.Windows_7_PC.map((e, i) =>
                  <ul>
                  <li key={i}>{e}</li>
                  </ul>
                  )} */
                    }
                </div>
                <div class="cspace_select">
                    <Select
                        label="Available Software List"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    /> </div>
            </div>
        )
    }
}
export default Cspace;