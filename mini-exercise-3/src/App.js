import React from 'react';
import boxes from './boxes';
import Box from './Box';
import './App.css';

function App() {
  // Initialize the state
  const [squares, setSquares] = React.useState(boxes);
  // Map the state array

  function toggle (id) {
    console.log(id);
    setSquares(preSquares => {
      const newSquares = [];
      for (let i= 0; i < preSquares.length; i++ ) {
        const currentSquare = preSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare)
        }
      }
      return newSquares;
    })
  }
  const squareElements = squares.map(square => (
    <Box 
    key={square.id}
    id={square.id} 
    on={square.on}
    toggle={ toggle }
    />
  ))

  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;
