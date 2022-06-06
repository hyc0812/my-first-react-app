import React from "react";
import card1 from "../images/katie-zaferes.png";
import star from "../images/star.png";

function Card() {
    return (
        <div className="card">
            <img src={ card1 } alt="" className="card--image" />
            <div className="card--stats">
                <img src={ star } alt="" className="card--star"/>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}

export default Card;