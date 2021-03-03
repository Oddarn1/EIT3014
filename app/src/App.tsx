import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Home/home';
import Difficulty from './Difficulty/difficulty';
import Location from './Location/location'

function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/location/:id">
            {/* :id is the parameter used to define which location to get from backend*/}
              <Location/>
          </Route>
          <Route path="/Difficulty">
            <Difficulty/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
