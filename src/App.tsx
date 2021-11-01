import React from "react";
import "./App.css";
import HomePage from "./containers/Homepage";
import Login from "./containers/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./containers/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
