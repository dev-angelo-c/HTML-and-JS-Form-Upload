import React, {useState} from "react";

function Radio(props){

  let [selected, setSelected] = useState(false);

  let { name } = props;

  return(
    <div>
      <input type="radio" name={name} value={selected} onClick={() => setSelected(!selected)}/>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}

module.exports = Radio;