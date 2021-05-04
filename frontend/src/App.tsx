import React from 'react';
import './App.css';
import Playground from './containers/Playground';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Playground test={false}/>
    </div>
  );
}

export default App;
