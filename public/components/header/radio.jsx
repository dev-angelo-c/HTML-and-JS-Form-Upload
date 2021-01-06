import React, {useState} from "react";

function Radio(props){

  let [selected, setSelected] = useState(false);

  return(
    <div>
      <input type="radio" name={props.name} value={selected} onClick={() => setSelected(!selected)}/>
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  )
}

module.exports = Radio;