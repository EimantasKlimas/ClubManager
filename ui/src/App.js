import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Navigation} from "./components/Navigation";
import {Content} from "./components/Content"
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (
    <Grid container spacing={2} className="App" >
      <Router>
        <Grid item xs={12}>
           <Navigation/>
        </Grid>
        <Grid item xs={12} >
           <Content/>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;

