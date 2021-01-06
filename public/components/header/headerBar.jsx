import React, {useState} from "react";
import Radio from "./radio"

function HeaderBar(props){

  let [headerData, setHeaderData] = useState([
    {
      selected: false,
      name: "small",
      size: "30"
    },    
    {    
      selected: false,
      name: "medium",
      size: "70"  
    },
    {
      selected: false,
      name: "large",
      size: "100"     
    }
  ]
)

  return(
    <div className="headerBar">
      <h3>Image upload and Preview Form</h3>
      <div className="radios">
        {
          headerData.map( (radio, idx) => {
            return (
              <Radio size={radio.size} key={idx} name={radio.name} selected={radio.selected} />
            )
          })
        }
      </div>
    </div>
  )


}

module.exports = HeaderBar;