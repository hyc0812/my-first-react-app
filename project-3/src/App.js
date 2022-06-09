import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"
import Unread from "./Unread"
import Form from "./Form"
import "./App.css"     //   remember to check this point if you found that the css style is not displayed!

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke 
            key={joke.id}
            id ={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} />
    })
    return (
        <div className="main">
            {jokeElements}

            <Unread />
            <hr/>
            <Form />
        </div>
    )
}
