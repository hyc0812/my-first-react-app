import './App.css';
import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    } 
    // add console.log when mouse hover the image
    function handleOnMouseOver() {
        console.log("MouseOver")
    }  
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" alt="" onMouseOver={ handleOnMouseOver }/>
            {/* <img src="assets/images/mountain-bike.png" alt="" /> */}
            <button onClick={ handleClick }>Click me</button>
        </div>
    )
}
