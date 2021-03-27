import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Immer from './components/Immer';
import ImageCrop from './components/ImageCrop.js';
import { SampleProvider } from './sample';
import SampleContext from "./components/SampleContext";
import Modal from './components/Modal';


const App = () => {

  return(
    <>
      {/* <Immer/>
      <SampleProvider>
        <div className="panes">
          <LeftPane/>
          <RightPane/>
        </div>
      </SampleProvider> */}
      <SampleContext/>
      {/* <ImageCrop/>
      <Modal/> */}
    </>
  );
};

export default App;