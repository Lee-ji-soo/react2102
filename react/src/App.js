import React from 'react';
<<<<<<< HEAD
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Immer from './components/Immer';
import ImageCrop from './components/ImageCrop.js';
import { SampleProvider } from './sample';
import SampleContext from './components/SampleContext';
=======
>>>>>>> 92782ac... 사용하지 않는 import 삭제(2)
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
