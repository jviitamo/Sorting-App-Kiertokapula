import './styles.css'

import React, { PureComponent } from 'react'

//component used for rendering the header/navigation of the page

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      width: window.innerWidth
    }
  }

  componentDidMount = () => {
    // Listen for window resize events
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions)
  }

  // Update dimensions on window resize. This makes sure that navigation will be updated correctly
  updateDimensions = () => this.setState({ width: window.innerWidth })

  // Method for moving through the page using the header.
  // Receives through props the method for moving and is given the index
  onClick = index => {
    if (this.state.open) this.setState({ open: false }) // If mobile navigation is open --> close it
    this.props.fullpage.fullpageApi.moveTo(index)
  }

  render() {
    const { open, width } = this.state

    // Different navigation for mobile
    if (width < 515) {
      return (
        <div className={`header-mobile ${open ? 'visible' : 'hidden'}`}>
          <div>
            <div className={'header-mobile-icon'} onClick={() => this.setState({ open: !this.state.open })}>
              <div />
              <div />
              <div />
            </div>
          </div>
          <s style={ {textDecorationLine: "underline"} }>Puolmatka</s>
          <s>Metsä-Tuomela</s>
          <s>Karanoja</s>
          <s>Kapula</s>
        </div>
      )
    }
    // Tablet/desktop
    return (
      <div className={"header"}>
        <div onClick={() => this.onClick(5)}>Mitä voin tehdä?</div>
        <div onClick={() => this.onClick(6)}>Lahjoita</div>
        <div onClick={() => this.onClick(3)}>Video</div>
        <img onClick={() => this.onClick(1)} src={"./images/logo.png"} className={"logo"} alt={"Fish logo"} />
        <div onClick={() => this.onClick(4)}>Faktat tiskiin</div>
        <div onClick={() => this.onClick(7)}>Meistä</div>
        <div onClick={() => this.onClick(8)}>Ota yhteyttä</div>
      </div>
    )
  }
}

export default Header