import React, { PureComponent } from 'react'

  class Navbar extends PureComponent {
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
  
    render() {
      const { open, width } = this.state
  
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
            <div style={ {textDecorationLine: "underline"} }>Puolmatka</div>
            <div>Metsä-Tuomela</div>
            <div>Karanoja</div>
            <div>Kapula</div>
          </div>
        )
      }
      // Tablet/desktop
      return (
        <div className="navbar">
          <s style={ {textDecorationLine: "underline"} }>Puolmatka</s>
          <s>Metsä-Tuomela</s>
          <s>Karanoja</s>
          <s>Kapula</s>
      </div>
      )
    }
  }
  
  export default Navbar