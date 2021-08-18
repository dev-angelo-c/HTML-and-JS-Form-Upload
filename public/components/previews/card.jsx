import React, { Component, useState, useEffect } from "react";

function ImgPreview(props){

  console.log(" PROPS: ", props);

  let { img = "",  source = "" } = props;
  let { uploadDate = "" , size = "" } = img;

  return(
    <div className="card">      
      <img src={source} width={`${size}%`}/>
      <div className="details">
        <p>Upload Date: {uploadDate}</p>
        <p>Size: {size}</p>        
      </div>
    </div>
  )
}

module.exports = ImgPreview;