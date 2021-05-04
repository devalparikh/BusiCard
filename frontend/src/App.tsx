import React from 'react';
import './App.css';
import Playground from './containers/Playground';

function App() {
  return (
    <div className="App">
      <Playground test={false}/>
    </div>
  );
}

export default App;
