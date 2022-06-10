import React from "react";
import memesData from "../memesData";

function Meme() {

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImage, setAllMemeImage] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const radomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[radomNumber].url;
        return url;
    }
        // setMeme(preMeme => {
        //     return {
        //         ...preMeme,
        //         randomImage: url,
        //         [name]: value
        //     }
        // });

    // need to change the form element into div element

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form--input"
                    name="topText"
                    onChange={ handleChange }
                    value={ meme.topText }
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input"
                    name="bottomText"
                    onChange={ handleChange }
                    value={ meme.bottomText }
                />
                <button 
                    className="form--button" 
                    onClick={ handleChange }
                    >
                        Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}


export default Meme;

