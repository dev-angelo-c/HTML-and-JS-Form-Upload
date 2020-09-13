import React from "react";

function useForm(props){
  return(
    <div id="formUploadContainer">
      <form action="/image" method="POST" encType="multipart/form-data" id="form">
        <input onChange={props.handleChange} type="file" name="image101" />
        <input type="text" name="test" />
        <input type="submit" value="submit" name="testphoto" />
        <hr />
      </form>
    </div>
  )
}

module.exports = useForm;
