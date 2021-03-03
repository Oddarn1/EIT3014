import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Home/home';
import Location from './Location/location';
import Header from './Header/header';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/location/:id">
            {/* :id is the parameter used to define which location to get from backend*/}
              <Location/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
