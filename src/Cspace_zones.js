import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./index.css";
import Media_Zone from "./Images/Media_Zone.jpg";
import One_Button_Studio from "./Images/One_Button_Studio.jpg";
import Product_Photo_Studio from "./Images/Product_Photo_Studio.jpg";
import Sound_Booth_Zone from "./Images/Sound_Booth_Zone.JPG";
import Virtual_Reality from "./Images/Virtual_Reality.jpg";
import { Card } from "@material-ui/core";


class Cspace_zones extends Component {
    render() {
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <h2 className="exp_heading">The Media Design Zone</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Card>
                            <img
                                className="image_css"
                                src={Media_Zone}
                                alt="Media Zone"
                            >
                            </img>
                        </Card>
                        <Card>
                            <h3 className="data_css">
                                The Media Design Zone is dedicated for media editing, recording, creative writing, website development and publishing. There are two Mac based workstations and one Windows 10 based workstation along with a sound booth.
                        </h3></Card>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <h2 className="exp_heading">Sound Booth</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Card><img className="image_css" src={Sound_Booth_Zone} alt="Sound Booth" /></Card>
                        <h3 className="data_css">
                            The Sound Booth may be scheduled through the Sound Booth calendar by any currently enrolled WSU student,
                             or any current WSU employee. The C-Space assistant will unlock the booth once the person who made the
                             Sound Booth reservation checks in at the C-Space Help Desk. The individual who schedules the Sound Booth
                             will be considered the main user and is responsible for any damage or misuse of the equipment, even if
                              a group is working on a project together. Users must not leave equipment unattended while it is checked
                              out to them. No food or drink is permitted in the Sound Booth.
                           </h3>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <h2 className="exp_heading">Virtual Reality Zone</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <img height="80%" width="40%" src={Virtual_Reality} alt="Virtual Reality" />
                        <h3 className="data_css">
                            The AR/VR provides the virtual reality experience to patrons. VR involves using 3D graphics and advanced interactions to immerse a real-world user in a simulated environment. The VR/AR zone has Oculus Rift, Dell VR’s and a high-performance gaming laptop. This can help students in game designing.
                        </h3>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <h2 className="exp_heading">Advanced Development Zone</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <h3 className="data_css">
                            The Advanced Development Zone is dedicated to prototype development. The zone is comprised of two high performance workstations, namely the CAD workstation and the Android/iOS app development workstation. The former is dedicated for CAD, simulation, and animation and the later is dedicated for application development.
                        </h3>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <h2 className="exp_heading">One button studio</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Card><img className="image_css" src={One_Button_Studio} alt="One Button Studio" /></Card>
                        <h3 className="data_css">
                            One button studio is a simplified video recording studio where in the students can record high quality videos without any hassle of setting up the lights and camera. You only need to carry a flash drive with you. The studio is available for all the Wichita State University staff, faculty and students.
                        </h3>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                    >
                        <h2 className="exp_heading">Product Photo Studio</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Card><img className="image_css" src={Product_Photo_Studio} alt="Product Studio" /></Card>
                        <h3 className="data_css">
                            Product Photo studio provides studio like effect to take professional photograph of your products, that could be published in magazines or brochures. It has special feature for taking 360 image of the product. The photos taken in Product Photo studio can be used for Making portfolio, Selling the product online and Blogging.
                        </h3>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div >
        );
    }
}
export default Cspace_zones;