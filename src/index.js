import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './style.css';


ReactDOM.render(
  <div>
      <Main />
      <Navbar />
  </div>,
  document.getElementById('root')
);

