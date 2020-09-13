import React from 'react';

function fdUpload(props){
  return (
    <div id="formDataUploadContainer">
      <input onChange={props.handleChange} type="file" name="image201" />
      <button onClick={props.fileUploadHandler}>Upload</button>
    </div>
  )
}

module.exports = fdUpload;