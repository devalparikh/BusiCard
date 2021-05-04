import React from "react";
import "./App.css";
import Playground from "./containers/Playground";
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "./containers/Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* TODO: Pass in array of categories */}
          <Landing />
        </Route>
        <Route exact path="/playground">
          {/* TODO: Pass in array of categories */}
          <Playground test={false} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
