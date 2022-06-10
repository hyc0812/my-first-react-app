import React from "react";
// import memesData from "../memesData"; // no need to import the data anymore

function Meme() {

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")      // make request to this URL
            .then(res => res.json())                    // Parse JSON into javascript
            .then(data => setAllMeme(data.data.memes))  // send specified data to some place
    },[allMeme])

    // const [allMemeImage, setAllMemeImage] = React.useState(memesData);

    function getMemeImage() {
        const radomNumber = Math.floor(Math.random() * allMeme.length);
        const url = allMeme[radomNumber].url;
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
        </main>
    )
}

export default Meme;

