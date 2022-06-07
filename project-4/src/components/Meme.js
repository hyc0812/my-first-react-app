import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // Get a random url. This method is really elegant and important!!
    function getMemeImage() {
       const memesArray = memesData.data.memes;
       const radomNumber = Math.floor(Math.random() * memesArray.length);
       const url = memesArray[radomNumber].url;
       console.log(url);
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

// "memes": [
//     {
//         "id": "181913649",
//         "name": "Drake Hotline Bling",
//         "url": "https://i.imgflip.com/30b1gx.jpg",
//         "width": 1200,
//         "height": 1200,
//         "box_count": 2
//     },