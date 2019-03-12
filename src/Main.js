import React, { Component } from "react";
import {HashRouter} from "react-router-dom";
import Navbar from "./Navbar";





class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

        <Navbar/>
        </div>
      </HashRouter>
    );

  }
}

export default Main;
