console.log(" HELLO PARCEL ");
import React, {
  Component,
  useState,
  useEffect
} from 'react';
import ReactDOM from "react-dom";

import FormDataConatiner from "./components/formdataupload/formdataupload";
import FormConatiner from "./components/formupload/formupload";

import Header from "./components/header/headerBar";
import ImgPreview from "./components/previews/card";

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
    fd.append("image201", this.state.file, this.state.file.name);

    //add text for fun
    fd.append("random", "text");

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
    this.setState({
      file: event.target.files[0]
    });
  }

  render() {
    return ( 
    <div class = "container">
      <div id = 'main-content'> 
      {/*create file upload using form element*/ } 
      <Header / >
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
      <div>
        <ImgPreview />
      </div> 
    </div>
    );
  }
}

ReactDOM.render( < Test / > , document.getElementById("app"));