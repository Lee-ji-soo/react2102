import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Parent from "./pract/Parent";

const PracApp = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Parent} />
          <Redirect path="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </>);
};

export default PracApp;
