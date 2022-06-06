import React from "react";
import logo from "../images/airbnb-logo2.png";

export default function Navbar() {
    return (
        <nav>
            <img src={ logo } alt="" className="nav--logo"/>
        </nav>
    )
}