import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "./veloact/Home";

const VeloApp = () => {
  return (
    <>
      <h1>ㅗㅑ</h1>
      <BrowserRouter>
        <div>helo</div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect path="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </>);
};

export default VeloApp;
