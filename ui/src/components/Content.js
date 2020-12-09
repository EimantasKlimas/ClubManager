import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ListClubs as List} from "./ListClubs";
import {CreateClub as Create} from "./CreateClub";

const Content = () => {
  return(
    <Switch>
      <Route exact path="/">
        <List/>
      </Route>
      <Route path="/api/summary">
        <Create/>
      </Route>
    </Switch>
  )
}

export {Content};
