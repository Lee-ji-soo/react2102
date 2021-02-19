import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Immer from './components/Immer';
import ImageCrop from './components/ImageCrop_Hook.js';
import { SampleProvider } from './sample';

const App = () => {

  return(
    <>
      <div className="immer">
        <Immer/>
      </div>
      <SampleProvider>
        <div className="panes">
          <LeftPane/>
          <RightPane/>
        </div>
      </SampleProvider>
      <div className="imageCrop">
        <ImageCrop/>
      </div>
    </>
  );
};

export default App;