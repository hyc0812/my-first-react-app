
import React from 'react';
import './App.css';

function App() {
  const [starWarsDate, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  React.useEffect(function() {
    console.log("Effect ran");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  },[count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(
        prevCount => prevCount + 1
      )}>Get next character</button>
      <pre>{JSON.stringify(starWarsDate, null, 2)}</pre>
    </div>
  );
}

export default App;