import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./views/Admin";
import Login from "./views/Login";
import Signup from "./views/Signup";

// Mes routes login avant le signup, proposer des boutons
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={Signup} />
        <Route path="/Admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;