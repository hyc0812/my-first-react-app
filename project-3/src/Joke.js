import React from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false);

    function toggle() {
        console.log(isShown)
        setIsShown(
            preState => !preState
        )
    }
    
    return (
        <div className="main--joker">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={ toggle }> toggle </button>
            <hr />
        </div>
    )
}