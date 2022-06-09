import React from "react";

export default function Form() {
    const [firstName, setFirstName] = React.useState("");
    function handleChange(event) {
        console.log(event.target.value)
        setFirstName(currentFirstName => {
            return event.target.value
        })
    };
    return (
        <div>
            <form>
                <input 
                type="text"
                placeholder="FirstName"
                onChange={ handleChange}
                />
            </form>
            <h1>{ firstName }</h1>
        </div>
    );
}