console.log(" HELLO PARCEL ");
import React, { Component }from 'react';
// import ReactDOM from "react-dom";

import FormDataConatiner from "./components/formdataupload/formdataupload";
import FormConatiner from "./components/formupload/formupload";

import Header from "./components/header/headerBar";
import ImgPreview from "./components/previews/ImgPreview";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false,
      file: null,
      filename: null,
    };
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fileUploadHandler() {
    let fd = new FormData();

    console.log(" FD : ", fd);

    fd.append("image201", this.state.file, this.state.file.name);

    //add text for fun
    fd.append("random", "text");

    console.log(" FD append complete ", fd);

    //create fetch request now
    fetch("/dynamic-image", {
        method: "POST",
        data: fd,
        body: fd,
      })
      .then((res) => {
        //update state for image upload
        this.setState({
          uploaded: true
        });
      })
      .catch((e) => console.log("ERROR ", e));
  }

  handleChange(event) {

    console.log(" eventTarget File: ", event.target.file);

    this.setState({
      file: event.target.files[0]
    });
  }

  render() {
    return ( 
      <div className = "container">
        <div id = 'main-content'> 
          
          <Header />
          
          {/*create file upload using form element*/ } 
          <FormConatiner 
            handleChange = {
              this.handleChange
            }/>

          {/*create file upload without html form element*/ } 
          <FormDataConatiner 
            handleChange = {
              this.handleChange
            }
            fileUploadHandler = {
              this.fileUploadHandler
            }/> 
        </div>
        
        {/*Image Preview*/}
        <div>
          <ImgPreview uploadDate={Date.now()} size={2000} />
        </div> 
      
      </div>
    );
  }
}

ReactDOM.render( < Test / > , document.getElementById("app"));