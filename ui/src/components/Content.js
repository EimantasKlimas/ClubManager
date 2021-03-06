import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ListClubs as List} from "../pages/ListClubs";
import {CreateClub as Create} from "../pages/CreateClub";

const Content = () => {
  return(
    <Switch>
      <Route exact path="/">
        <List/>
      </Route>
      <Route path="/create">
        <Create/>
      </Route>
    </Switch>
  )
}

export {Content};
