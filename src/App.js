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
class App extends Component {

  render() {
    return (
      < HashRouter >
        <div>
          <h1>Ablah Library</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/cspace">C-Space</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/cspace" component={Cspace} />
            <Route path="/contactus" component={Contact} />
          </div>

        </div>
      </HashRouter >
    );
  }
}

export default App;
