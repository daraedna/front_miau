import React from 'react';
import './App.css';

import logo from './assets/logo.png';

import Routes from './routes';

function App() {
  
  return (
    <div className="App">

      <div className="container">
        
        <img src={logo} alt="miAu"/>
        <div className="content"> 
         

        <Routes  />

      </div>
    </div>  
   </div>
  );
}

export default App;
