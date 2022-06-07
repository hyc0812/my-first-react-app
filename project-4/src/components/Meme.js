import React from "react";
import memesData from "../memesData";

function Meme() {
    //Get a random url. This method is really elegant and important!!
    const [memeImage, setMemeImage] = React.useState("");
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const radomNumber = Math.floor(Math.random() * memesArray.length);
        const currentImg = memesArray[radomNumber].url;
        setMemeImage(currentImg);

    }
    // need to change the form element into div element

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button" onClick={ getMemeImage }>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme--image" alt=""/>
        </main>
    )
}


export default Meme;

