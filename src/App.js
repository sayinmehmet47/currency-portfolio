import React from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Mainpage from "./pages/Mainpage";
import { AnimatedSwitch } from "react-router-transition";
function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/mainpage">
            <Mainpage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </AnimatedSwitch>
      </Router>{" "}
    </div>
  );
}

export default App;
