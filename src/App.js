import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logmain from "./components/logmain";
import Dashboard from './components/Dahboard';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Logmain} />
      <Route path="/Dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
