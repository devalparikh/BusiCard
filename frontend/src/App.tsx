import React from "react";
import "./App.css";
import Playground from "./containers/Playground";
import { Switch, Route } from "react-router-dom";
import Landing from "./containers/Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/playground">
          <Playground test={false} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
