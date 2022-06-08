import React from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false);

    function toggle() {
        setIsShown(
            preState => !preState
        )
    }
    
    return (
        <div className="main--joker">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={ toggle }> {isShown ? "Hide" : "Show"} Punchline </button>
            <hr />
        </div>
    )
}