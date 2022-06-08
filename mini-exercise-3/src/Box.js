import React from "react";

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    }
    return (
        <div className='box' style={ styles } onClick={ () => props.toggle(props.id) }></div>
    )
}