import React from 'react';
import Modal from './components/Modal';
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/effect" component={UseEffect} /> */}
        <Route exact path="/effect" component={UseEffect} />
        <Route exact path="/usememo" component={UseMemo} />
        {/* <Redirect path="/*" to="/" /> */}
        {/* <Immer/>
        <SampleProvider>
          <div className="panes">
            <LeftPane/>
            <RightPane/>
          </div>
        </SampleProvider> */}
        {/* <SampleContext /> */}
        {/* <ImageCrop/>
        <Modal/> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
