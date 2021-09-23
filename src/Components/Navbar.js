import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <nav> 
            <ul>
            <li> <NavLink activeStyle={{color:"red"}} exact to="/">Home Country Lab</NavLink></li>
            
           
            </ul>
        </nav>
    )
}

export default NavBar;