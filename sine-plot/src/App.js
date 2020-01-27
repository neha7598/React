import React from 'react';
import FirstPlot from './FirstPlot.js'
import './App.css'


function App() {
  return (
    <div>
      <div className="App-header">
        <header >
          <h1>Sin Plot using Plotly.js</h1>
        </header>
      </div>
      <div className="Plots">
        <FirstPlot />
      </div>
    </div>
  );
}

export default App;