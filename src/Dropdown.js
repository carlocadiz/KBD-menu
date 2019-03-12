import React from 'react';
// import './style.css';
import {
  Route,
  NavLink

} from "react-router-dom";
import Home from "./Home";
import Background from "./Background";
import Contact from "./Contact";



class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (

         <div>
           <h1>Canada</h1>

             <div  className="dropdown" style = {{background:"red",width:"200px"}} >
             <div className="button" onClick={this.showDropdownMenu}> Menu </div>

              { this.state.displayMenu ? (

                  <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/background">Background</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                ):
                (
                  null
                )
              }
            </div>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/background" component={Background}/>
            <Route path="/contact" component={Contact}/>
            </div>
         </div>

    );
  }
}

export default Dropdown;

