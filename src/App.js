import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Characters from "./Characters";
import app from './firebase';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/characters" component={Characters} />
      </Switch>
    </Router>
  );
}

export default App;