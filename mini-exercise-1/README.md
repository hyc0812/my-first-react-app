    // const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    // function addItem() {
    //     const newThingText = `Thing ${things.length + 1}`
    //     setThings(prevState => [...prevState, newThingText])
    // }
    
    // const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
    // return (
    //     <div>
    //         <button onClick={addItem}>Add Item</button>
    //         {thingsElements}
    //     </div>
    // )


    // ___________----------__________----------________-f----------------

// import React from "react"

// export default function App() {
//     const [isImportant, setIsImportant] = React.useState("Yes")
//     /**
//      * Challenge: 
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("No")
//      * 2. add a click event listener to the div.state--value
//      *    that runs `handleClick` when the div is clicked.
//      */
    
//     function handleClick() {
//         if (isImportant === "No") {
//             setIsImportant("Yes")
//         } else if (isImportant === "Yes") {
//             setIsImportant("No")
//         }
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title" onClick={ handleClick }>Is state important to know?</h1>
//             <div className="state--value">
//                 <h1 onClick={ handleClick }>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }
// ------------------------------------------------------------\'

// import React from "react"

// export default function App() {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(count + 1)
//     }
    
//     function subtract() {
//         setCount(count - 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }



```js
> useState
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    // Challenge: update `substract` to use a callback function
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
```

> Flipping state
```js
import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
```

> complex state: arrays

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

> state array add items

```js
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
    const [array, setArray] = React.useState(["Thing 1", "Thing 2"])
    function addItem() {
        setArray(previousArr => {
            return [...previousArr, `Thing ${previousArr.length +1}`]
        })
    }
    const showArray = array.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div>
            <button onClick={ addItem }>Add Item</button>
            { showArray }
        </div>
    )
 }
ReactDOM.render(<App />, document.getElementById('root'));
```