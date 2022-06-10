import React from "react";
import memesData from "../memesData";

function Meme() {

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])

    const [allMemeImage, setAllMemeImage] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const radomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[radomNumber].url;
        setMeme(preMeme => {
            return {
                ...preMeme,
                randomImage: url
            }
        });
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(preMeme => ({
            ...preMeme,
            [name] : value
        }))
    }

    React.useEffect(() => {
        console.log(allMeme);
        fetch("https://api.imgflip.com/get_memes")      // make request to this URL
            .then(res => res.json())                    // Parse JSON into javascript
            .then(data => setAllMeme(data.data.memes))  // send specified data to some place
    },[])

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
                    onClick={ getMemeImage }
                    >
                        Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt=""/>
                <h2 className="meme--text top">{ meme.topText }</h2>
                <h2 className="meme--text bottom">{ meme.bottomText }</h2>
            </div>
            <pre>{JSON.stringify(allMeme, null, 2)}</pre>
        </main>
    )
}

export default Meme;

