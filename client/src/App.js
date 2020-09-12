import React from 'react';
import './App.css';
import Home from './pages/home.js';
import About from './pages/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = '/about' component = {About}/>
      </Switch>
    </Router>
    
  );
}

export default App;
