import './App.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Cspace from "./Cspace";
import Contact from "./Contact";
import Home from "./Home";
import Cspace_zones from './Cspace_zones';

class App extends Component {

  render() {
    return (
      < HashRouter >
        <div>
          <h1>Ablah Library</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/cspace">C-Space</NavLink></li>
            <li><NavLink to="/cspace_zones">C-Space Zones</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/cspace" component={Cspace} />
            <Route path="/cspace_zones" component={Cspace_zones} />
            <Route path="/contactus" component={Contact} />
          </div>

        </div>
      </HashRouter >
    );
  }
}

export default App;
