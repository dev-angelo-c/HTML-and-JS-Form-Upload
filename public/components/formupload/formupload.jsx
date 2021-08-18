import React, { Component } from "react";

function useForm(props){
  return(
    <div id="formUploadContainer" className="uploadContainer" >
      <h2>Upload Using Form</h2>
      <form action="/image" method="POST" encType="multipart/form-data" id="form" name={"file"}>
        <input onChange={props.handleChange} type="file" name="imageUpload" />
        <input type="submit" value="submit" name="testphoto" />
      </form>
    </div>
  )
}

module.exports = useForm;
