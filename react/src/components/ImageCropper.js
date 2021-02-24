import React, { useRef, useState } from "react";
import ReactCrop from 'react-image-crop';
import {croppedImgToUrl} from "../utils/imageutils";
import './custom/cropCustom.scss';
import styled from "styled-components";

const ImageCropper = ({
  imgSrc,
  setImgSrc,
  imgSearchByUrl
}) => {
  const imgRef= useRef();
  const [crop, setCrop] = useState({
    unit: "%",
    width: 80,
    aspect: 1/1
  });
  const [cropped, setCropped] = useState(null);
  const [zoom, setZoom] = useState(1);  
  
  const handleCloseCropper = event =>{
    if (event) event.preventDefault()
    setImgSrc("");
  }
  
  const handleSubmit = () =>{
    const generatedUrl = croppedImgToUrl(imgRef.current, cropped); // <img/>, crop
    imgSearchByUrl(generatedUrl)
    handleCloseCropper();
  };

  return(
    <CropperWrapper>
      <ReactCrop
        className="react_crop"
        src={imgSrc}
        crop={crop}
        onImageLoaded={img=> {imgRef.current = img} }
        onChange={crop=> {setCrop(crop)}}
        onComplete = {crop=> {setCropped(crop)}}
        zoom={zoom}
        onZoomChange={zoom => {setZoom(zoom)}}
      />
      <button onClick={handleSubmit}>다음</button>
    </CropperWrapper>
  )
};

const CropperWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9090;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  .react_crop{
    
  }
`;

export default ImageCropper;