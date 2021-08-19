console.log(" HELLO PARCEL ");
import React, { Component, useState, useEffect }from 'react';
import ReactDOM from "react-dom";

import { FormDataUpload } from "./components/formdataupload/formdataupload";
import FormConatiner from "./components/formupload/formupload";

import Header from "./components/header/headerBar";
import ImgPreview from "./components/previews/ImgPreview";

function Test(){
  
  return ( 
      <div className = "container">
        <div id = 'main-content'> 
          
          <Header />
          
          {/*create file upload using form element*/ } 
          <FormConatiner />

          {/*create file upload without html form element*/ } 
          <FormDataUpload /> 
        </div>
        
        {/*Image Preview*/}
        <div>
          <ImgPreview uploadDate={Date.now()} size={2000} />
        </div> 
      
      </div>
    );
  }

ReactDOM.render( < Test / > , document.getElementById("app"));