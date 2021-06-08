import React from "react";
import "./App.css";
import Playground from "./containers/Playground";
import { Switch, Route } from "react-router-dom";
import Landing from "./containers/Landing";
import NavBar from "./components/navbar/NavBar";
import Auth, { AuthTypes } from "./containers/Auth";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavBar></NavBar>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <Auth type={AuthTypes.Login} />
        </Route>
        <Route exact path="/signup">
          <Auth type={AuthTypes.Signup} />
        </Route>
        <Route exact path="/playground">
          <Playground test={false} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
