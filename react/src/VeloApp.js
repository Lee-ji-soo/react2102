import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './veloact/Home';
import Counter from './veloact/Counter';
import InputSample from "./veloact/InputSample";

const VeloApp = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path='/input' component={InputSample}/>
          <Redirect path="/*" to="/00/00/11" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default VeloApp;
