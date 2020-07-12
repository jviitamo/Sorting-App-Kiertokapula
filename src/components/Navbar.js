import React, { PureComponent } from 'react'
import Menu from 'react-hamburger-menu'

const names = [
  {
    name: "Puolmatka",
    underline: true 
  },
  {
    name: "Metsä-Tuomela",
    underline: false 
  },
  {
    name: "Karanoja",
    underline: false 
  },
  {
    name: "Kapula",
    underline: false 
  },
  {
    name: "Lumikorpi",
    underline: false 
  }
]

  class Navbar extends PureComponent {
    constructor(props) {
      super(props)
  
      this.state = {
        open: false,
        width: window.innerWidth,
        list: names
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

      const { open, width, list } = this.state
      
      const handleResultChange = (item) => {
        this.setState({list: list.map(item1 => {
          if (item1.name === item.name) {
            item1.underline = true
          } else item1.underline = false
          return item1
        })})  
      }

      const handleClick = (item) => {
        handleResultChange(item)
        this.setState({ open: !this.state.open })
      }

      const renderMobileList = list.map(item => <p className="mobile" key={item.name} style={item.underline ? {textDecorationLine: "underline"} : {}} onClick={() => handleClick(item)}>{item.name}</p>)
      const renderList = list.map(item => <s key={item.name} style={item.underline ? {textDecorationLine: "underline"} : {}} onClick={() => handleResultChange(item)}>{item.name}</s>)
      const chosen = list.filter(item => item.underline === true)

      if (width < 515) {
        return (
          <div className={`header-mobile ${open ? 'visible' : 'hidden'}`}>
            <div>
              <div>
               <Menu 
               color="#005580"
               strokeWidth={3}
               width={27}
               height={20}
               isOpen={this.state.open}
               menuClicked={() => this.setState({ open: !this.state.open })}
               />
              </div>
              <div className="chosen" style={open ? {display: "none"} : {display: ""}}>{chosen[0].name}</div>
            </div>
            {renderMobileList}
          </div>
        )
      }
      // Tablet/desktop
      return (
        <div className="navbar">
          {renderList}
        </div>
      )
    }
  }
  
  export default Navbar