import React, {useState, useEffect } from "react";


export const fileUploadHandler = function(props) {

  console.log(" PROPS ", props);

  let {file = "N/A "} = props;
  let {name = "N/A "} = file;
  let fd = new FormData();
  try{
    console.log(" FD : ", fd);

    fd.append("image201", file, name);

    //add text for fun
    fd.append("random", "text");

    console.log(" FD append complete ", fd);
  }catch(e){
    console.log(" ERROR : ", e);
  }
  //create fetch request now
  fetch("/dynamic-image", {
      method: "POST",
      data: fd,
      body: fd,
    })
    .then((res) => {
      //update state for image upload
      console.log(" RESPONSE ", res.body);
    })
    .catch((e) => console.log("ERROR ", e));
}

export const updateFileName = function(e){
  console.log(" E: ", e.target);
  setFileName(e.target.value);
  console.log(" FILE NAME ", fileName);
}

export const FormDataUpload = function(){

  let [fileName, setFileName] = useState("");
  let [fileType, setFileType] = useState(".png");
  

  console.log(" FILENAME ", fileName);
  return (
    <div id="formDataUploadContainer" className="uploadContainer" >
      <h2>Upload Using Form Data</h2>
      <label htmlFor="image201">{fileName}###</label>
      <input onChange={ (e) => { console.log("E ", e); setFileType(e.target.files[0]) } } type="file" name="image201" />      
      <input onChange={ updateFileName } id="formFileName" name="formFileName" value={fileName} />
      <button onClick={ (e) => fileUploadHandler(fileType) }>Upload</button>
      <div>
        <span>File Name: {fileName}</span>
        <p>Name Length: {fileName.length}</p>
        <span>Extension</span>
      </div>
    </div>
  )
}