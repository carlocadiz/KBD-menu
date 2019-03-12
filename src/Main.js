import React, { Component } from "react";
import {HashRouter} from "react-router-dom";
import Dropdown from "./Dropdown";





class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

        <Dropdown/>
        </div>
      </HashRouter>
    );

  }
}

export default Main;
