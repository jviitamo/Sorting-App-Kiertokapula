import React, { useState } from 'react'; 
import './styles.css'
import Template from './template'
import Footer from './footer'
import Navbar from './Navbar'
import Lists from './Lists'

const App = () =>  {

  const [filter, setFilter] = useState('')
  const [open, setOpen] = useState(false)
  const [map, setMap] = useState('')
  const [name, setName] = useState('')
  const [information, setInformation] = useState("")
  const [items, setItems] = useState(Lists.Puolmatka)
  const [down, setDown] = useState(true)

  //changes showed result based on the clicked item
  const handleResultChange = (item) => {
    if (item.underline === true) {
      setItems(items.map(item => {
        item.underline = false
        return item
      }))
      setMap("")
      setName("")
      setInformation("")
    }
    else {
      setItems(items.map(item1 => {
        if (item1.name === item.name) {
          item1.underline = true
        } else item1.underline = false
        return item1
      }))
      setMap(item.map)
      setName(item.name)
      setInformation(item.information)
    }
  }
  
  const handlePlaceChange = (item) => {
    console.log(item)
    if (item.name === "Puolmatka") {
      setItems(Lists.Puolmatka)
    } else if (item.name === "Kapula") {
      setItems(Lists.Kapula)
    } else if (item.name === "Karanoja") {
      setItems(Lists.Karanoja) 
    } else if (item.name === "Metsä-Tuomela") {
      setItems(Lists.MetsäTuomela)
    } else if (item.name === "Lumikorpi") {
      setItems(Lists.Lumikorpi)
    }
    setMap("")
    setName("")
    setInformation("")
  }

  const filteredItems = items.filter(item => item.name.toUpperCase().substring(0, filter.length).indexOf(filter.toUpperCase()) >= 0)

  const Arrows = () => {
    //changes the arrow direction on click
    const HandleArrowClick = () => {
      setOpen(!open)
      setDown(!down)
    }

    return (
      <div style={filteredItems.length === 0 | filteredItems.length < items.length ? {display: "none"} : {display: ""}}>
        <p className="arrow1" style={down ? {display: ""} : {display: "none"}} onClick={HandleArrowClick}><i className="arrow down"></i></p>
        <p className="arrow2" style={!down ? {display: ""} : {display: "none"}} onClick={HandleArrowClick}><i className="arrow up"></i></p>
      </div>
    )
  }

  const List = () => {

    //filters the items based on the filter-text
    //maps the items to a list
    const renderList = filteredItems.map(item => <li key={item.name} className="link" style={item.underline ? {textDecorationLine: "underline"} : {}} onClick={() => handleResultChange(item)}>{item.name}</li>)

    return (
      <ul style={open | filteredItems.length === 0 | filteredItems.length < items.length ? {display: ""} : {display: "none"}}>{renderList}</ul>
    )
  }

  //does not show filtered items if there is no filter or filter gives no result
    return (
      <div className="App">
        <Navbar handlePlaceChange={handlePlaceChange} />
        <h1>Kiertokapulan lajitteluhaku</h1>
        <div className="inputWrapper">
          <Arrows />
          <input placeholder="etsi jätettä" value={filter} onChange={({ target }) => setFilter(target.value)}/>
        </div>
        <List />
        <p style={filteredItems.length === 0 ? {display: ""} : {display: "none"}}>Ei hakutuloksia</p>
        <Template name={name} map={map} information={information} />
        <Footer/>
      </div>
    );
  }



export default App
