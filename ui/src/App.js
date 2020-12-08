import React, {Component} from 'react';
import {Navigation} from "./components/Navigation";
import {Content} from "./components/Content"
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Content/>
      </Router>
    </div>
  );
}

export default App;

