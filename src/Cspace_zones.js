import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Cspace_zones extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            zones: ["Media Design Zone", "Sound Booth", "Virtual Reality Zone", "Advanced Development Zone", "One Button Studio", "Product Photo Studio"]
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div>
                <div
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    {this.state.zones && this.state.zones.map((e, i) =>
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
                {
                    this.state.isHovering &&
                    <div>
                        {/* Hovering right meow! */}
                    </div>
                }
            </div>
        );
    }
}
export default Cspace_zones;