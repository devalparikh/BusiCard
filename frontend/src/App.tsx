import React from "react";
import "./App.css";
import Playground from "./containers/Playground";
import NavBar from "./components/navbar/NavBar";
import EditSidebar from './components/edit/EditSidebar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <EditSidebar></EditSidebar>
      <Playground test={false} />
    </div>
  );
}

export default App;
