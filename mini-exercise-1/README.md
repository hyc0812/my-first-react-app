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