import React from 'react';
import Basemap from './Components/Basemap';
import './App.css';

function App() {
  return (
    <div className="App">
      {greetings()}
      <Basemap/>
    </div>
  );
}

function greetings(){
  console.log("Hello")
}

export default App;
