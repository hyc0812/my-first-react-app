import React from "react";
import memesData from "../memesData";

export default function Meme() {
    //Get a random url. This method is really elegant and important!!
    let urlSelect;
    function getMemeImage() {
       const memesArray = memesData.data.memes;
       const radomNumber = Math.floor(Math.random() * memesArray.length);
       urlSelect= memesArray[radomNumber].url;
       console.log(urlSelect);
    }
    // need to change the form element into div element
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button" onClick={ getMemeImage }>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}


