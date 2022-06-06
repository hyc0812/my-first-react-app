import React from "react";
import logo from "../logo.svg";

function Navbar() {
    return (
        <nav>
            <img src={ logo } alt="" width="100px"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar;