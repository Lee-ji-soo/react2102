import React, {useState } from 'react';
import ImageCropper from './ImageCropper';

const ImageCrop = () => {
  const [imgSrc, setImgSrc] = useState("");

  const handleUploadFile = e => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.addEventListener("load", ()=>{setImgSrc(reader.result)});
      reader.readAsDataURL(file);
    }
  }

  const imgSearchByUrl = url => {
    console.log(url)
  }

  return (
    <>
      <div>
        <input type="file" accept="image/*" multiple={false} onChange={handleUploadFile}/>
      </div>
      {imgSrc && (
        <ImageCropper
          imgSrc={imgSrc}
          setImgSrc={setImgSrc}
          imgSearchByUrl= {imgSearchByUrl}
        />
      )}
    </>
  );
}

export default ImageCrop;
