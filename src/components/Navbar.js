import React from 'react'

const Navbar = ( {modal1, modal2, modal3, set1, set2, set3} ) => {
    return (
      <div className="navbar">
        <s style={ {textDecorationLine: "underline"} }>Puolmatka</s>
        <s onClick={() => set1(true)}>Metsä-Tuomela</s>
        <s onClick={() => set2(true)}>Karanoja</s>
        <s onClick={() => set3(true)}>Kapula</s>
      </div>
    )
  }

  export default Navbar