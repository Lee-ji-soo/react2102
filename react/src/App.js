import React from 'react';
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseForm from "./components/UseForm.tsx";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
  
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/useform" component={UseForm}/>
        <Route exact path="/effect" component={UseEffect} />
        <Route exact path="/usememo" component={UseMemo} />
        <Redirect path="/*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
