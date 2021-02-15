const uploadImage = async (files) => {
  //files[0] : 
  // File {
  //name: "11406152_404081019778859_5163589344541633025_o.jpg", 
  //lastModified: 1611729930769, 
  //lastModifiedDate: Wed Jan 27 2021 15:45:30 GMT+0900 (대한민국 표준시), 
  //webkitRelativePath: "", size: 268592, 
  //…}
  //lastModified: 1611729930769,
  //lastModifiedDate: Wed Jan 27 2021 15:45:30 GMT+0900 (대한민국 표준시) 
  //name: "11406152_404081019778859_5163589344541633025_o.jpg"
  //size: 268592
  //type: "image/jpeg"
  //webkitRelativePath: ""
  ///...
  const loadedImg = await loadImage(files[index], function (file) { }, { orientation: 1, mata: true });
  await console.log('loadedImage', loadedImg);

}

<input
  type="file"
  multiple
  hidden
  onChange={(e) => {
    if (e.target.files) {
      uploadImage(e.target.files);
    }
  }} />