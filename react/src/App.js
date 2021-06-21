import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Immer from './components/Immer';
import ImageCrop from './components/ImageCrop.js';
import { SampleProvider } from './sample';
import SampleContext from './components/SampleContext';
import Modal from './components/Modal';
import UseEffect from "./components/UseEffect";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/effect" component={UseEffect} />
        <Route path="/effect/:fab" component={UseEffect} />
        <Redirect path="/*" to="/" />
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
