import React, {useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {croppedImgToUrl} from "../imageutils";

const ImageCrop = () => {
  const imageRef= useRef();
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState({
    unit: "%",
    width: 80,
    aspect: 1/1
  });
  const [cropped, setCropped] = useState({
    crop: null,
    url: ""
  });

  const handleSubmit = async() =>{
    const generatedUrl = await croppedImgToUrl(imageRef.current, cropped.crop); // <img/>, crop
    setCropped({url: generatedUrl});
  };

  const handleUploadFile = e => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.addEventListener("load", ()=>{setImgSrc(reader.result)
      });
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <div>
        <input type="file" accept="image/*" multiple={false} onChange={handleUploadFile}/>
      </div>
      {imgSrc && (
        <div>
          <ReactCrop
            src={imgSrc}
            crop={crop}
            onImageLoaded={img=> {imageRef.current = img} }
            onComplete = {crop=> {setCropped({crop})}}
            onChange={crop=> {setCrop(crop)}}
          />
        </div>
      )}
        <img src={cropped.url}/>
      <button onClick={handleSubmit}>다음</button>
    </>
  );
}

export default ImageCrop;
