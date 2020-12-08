import React from 'react';
import {Route, Switch} from "react-router-dom";

const Test = () => {
  return(
    <div>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
      <p>adasdasdasd</p>
    </div>
  )
}

const Test2 = () => {
  return(
    <div>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
      <p>22222adasdasdasd</p>
    </div>
  )
}

const Content = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Test/>
      </Route>
      <Route path="/api/summary">
        <Test2/>
      </Route>
    </Switch>
  )
}

export {Content};
