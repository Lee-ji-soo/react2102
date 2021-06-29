import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "./veloact/Home";

const VeloApp = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect path="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </>);
};

export default VeloApp;
