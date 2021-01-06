import React, { Component, useState, useEffect } from "react";

function ImgPreview(props){
  return(
    <div className="card">      
      <img src={props.source} width={`${props.size}%`}/>
      <div className="details">
        <p>Upload Date: {props.img.uploadDate}</p>
        <p>Size: {props.img.size}</p>        
      </div>
    </div>
  )
}

module.exports = ImgPreview;