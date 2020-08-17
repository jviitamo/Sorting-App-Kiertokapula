import React from 'react'
import './styles.css'
import ModalImage from "react-modal-image";



const Template = ( {name, map, information} ) => {
  
      return (
        <div className="wrapper">
          <div className="innerwrap">
            <ModalImage
            small={map}
            large={map}
            hideZoom={true}
            hideDownload={true}
            alt={name}
            />
          </div>
          <div className="information" style={name !== "" ? {display: ""} : {display: "none"}}>
            <h2>{name}</h2>
            <p>{information}</p>
          </div>
        </div>
      )
    }


export default Template