import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Navigation} from "./components/Navigation";
import {Content} from "./components/Content"
import {Footer} from "./components/Footer"
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
        <Footer/>
      </Router>
    </Grid>
  );
}

export default App;

