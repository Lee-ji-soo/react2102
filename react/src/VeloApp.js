import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './veloact/Home';
import Counter from './veloact/Counter';

const VeloApp = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Redirect path="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default VeloApp;
