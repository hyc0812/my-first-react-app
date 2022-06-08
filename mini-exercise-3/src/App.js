import React from 'react';
import boxes from './boxes';
import './App.css';

function App() {
  // Initialize the state
  const [squares, setSquares] = React.useState(boxes);
  // Map
  const squareElements = squares.map(square => (
    <div className='box' key={square.id}>{square.on}</div>
  ))
  console.log(squareElements[0])
  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;




    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */