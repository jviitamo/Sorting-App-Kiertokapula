import React from 'react'
import './styles.css'
import ModalImage from "react-modal-image";



const Template = ( {name, map, information} ) => {


    if (name.length > 0 ) {
      return (
        <div className="wrapper">
        <div className="innerwrap">
        <ModalImage
        className="photo" 
        small={map}
        large={map}
        hideZoom={true}
        hideDownload={true}
        />
        </div>
        <div className="information">{information}</div>
        </div>
      )
    }

    return (
        <div className="empty"></div>
    )
}

export default Template