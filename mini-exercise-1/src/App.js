import './App.css';
import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }   
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" alt=""/>
            {/* <img src="assets/images/mountain-bike.png" alt="" /> */}
            <button onClick={ handleClick }>Click me</button>
        </div>
    )
}
