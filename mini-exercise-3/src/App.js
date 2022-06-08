import React from 'react';
import boxes from './boxes';
import Box from './Box';
import './App.css';

function App() {
  // Initialize the state
  const [squares, setSquares] = React.useState(boxes);
  // Map the state array

  // toggle the square
  function toggle (id) {
    // show the square id that was clicked
    console.log(id);
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? {...square, on:!square.on} : square
      });
    });
  }

  // Alternatively, we can also use toggle2 to solve the toggle problem
  // This method is not as smart as toggle()...
  function toggle2 (id){
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


  // mapping the squares
  const squareElements = squares.map(square => (
    <Box 
    key={square.id}
    id={square.id} 
    on={square.on}
    toggle={ toggle } // can change the two function here (toggle() or toggle2())
    />
  ))

  // render
  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;
