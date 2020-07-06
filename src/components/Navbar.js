import React from 'react'
/*
<Modal
          className={'Modal'}
          isOpen={modal1}
          onRequestClose={() => set1(false)}
          overlayClassName={'Overlay'}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49496.42307640485!2d24.71108820040511!3d60.46962864805057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468de2e0b80af889%3A0x43ef6fff296233f5!2sMets%C3%A4-Tuomelan%20J%C3%A4te-asema!5e0!3m2!1sfi!2sfi!4v1593536893105!5m2!1sfi!2sfi" title="metsä" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </Modal>
        <Modal
          className={'Modal'}
          isOpen={modal2}
          onRequestClose={() => set2(false)}
          overlayClassName={'Overlay'}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.7628454925184!2d24.47987521567662!3d60.94316528225233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e67bf654c7709%3A0x6e9642c11be423f!2sKiertokapula%20Oy%2C%20Karanojan%20j%C3%A4tteidenk%C3%A4sittelyalue!5e0!3m2!1sfi!2sfi!4v1593537107840!5m2!1sfi!2sfi" width="600" height="450" frameborder="0" title="karanoja" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  
        </Modal>
        <Modal
          className={'Modal'}
          isOpen={modal3}
          onRequestClose={() => set3(false)}
          overlayClassName={'Overlay'}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.8127453355792!2d24.798449615661063!3d60.662683982145076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e0dd56154290d%3A0xd4be7fb4e13b7a9c!2sKiertokapula%20Oy!5e0!3m2!1sfi!2sfi!4v1593537066056!5m2!1sfi!2sfi" width="600" height="450" frameborder="0" title="kapula" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  
        </Modal>
        */

const Navbar = ( {modal1, modal2, modal3, set1, set2, set3} ) => {
    return (
      <div className="sidemenu">
        <s style={ {textDecorationLine: "underline"} }>Puolmatka</s>
        <s onClick={() => set1(true)}>Metsä-Tuomela</s>
        <s onClick={() => set2(true)}>Karanoja</s>
        <s onClick={() => set3(true)}>Kapula</s>
      </div>
    )
  }

  export default Navbar