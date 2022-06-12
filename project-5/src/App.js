
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import React from 'react';

function App() {

  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode(preMode => !preMode)
  }
  return (
    <div className="App">
      <Navbar darkMode={ darkMode } toggleDarkMode={ toggleDarkMode }/>
      <Main darkMode={ darkMode }/>
    </div>
  );
}

export default App;