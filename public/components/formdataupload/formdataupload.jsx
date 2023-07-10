import React, { Component } from "react";

function fdUpload(props){
  return (
    <div id="formDataUploadContainer">
      <h2>Upload Using Form Data</h2>
      <input onChange={props.handleChange} type="file" name="image201" />
      <button onClick={props.fileUploadHandler}>Upload</button>
    </div>
  )
}

module.exports = fdUpload;