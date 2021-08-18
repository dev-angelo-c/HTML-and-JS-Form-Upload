import React, {useState, useEffect } from "react";

function fdUpload(props){

  let [fileName, setFileName] = useState("");
  let [fileType, setFileType] = useState(".png");

  let {handleChange, fileUploadHandler } = props;

  function updateFileName(e){
    setFileName(e.target.value);
    console.log(" FILE NAME ", fileName);
  }

  return (
    <div id="formDataUploadContainer" className="uploadContainer" >
      <h2>Upload Using Form Data</h2>
      <input onChange={ setFileName } type="file" name="image201" />
      <input onChange={ updateFileName } id="formFileName" name="formFileName" />
      <button onClick={fileUploadHandler}>Upload</button>
      <div>
        <span>File Name: {fileName}</span>
        <p>Name Length: {fileName.length}</p>
        <span>{fileName.length >= 1 ? "Extension" : null}</span>
      </div>
    </div>
  )
}

module.exports = fdUpload;