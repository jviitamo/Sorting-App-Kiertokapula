import React, { useState } from 'react'; 
import seka from './photos/1.png'
import metalli from './photos/2.jpg'
import puu from './photos/3.jpg'
import './styles.css'
import Template from './template'
import Footer from './footer'
import Navbar from './Navbar'


const list = [
  {
    name: 'sekajäte',
    underline: false,
    map: seka,
    information: "Sekajätettä kerätään kiinteistöiltä, joilla biojätettä ei tarvitse määräysten mukaan lajitella erikseen ja joilla sitä ei kompostoida. Tähän luokkaan kuuluvat kaikki muihin osiin kelpaamaton jäte. Esimerkiksi SER-romu, vaaralliset jätteet tai rakennusjätteet eivät kuulu tähän kategoriaan."
  },
  {
    name: 'puu',
    underline: false,
    map: puu,
    information: "Puu jaetaan kahteen osaan, puhtaaseen puuhun ja purkupuuhun. Puhdas puu saa sisältää vähäisiä määriä nauloja, ruuveja ja saranoita. Myös lahonnut puu kelpaa.Toisaalta purkupuu taas saa sisältää nauloja, ruuveja ja saranoita sekä muita mekaanisia epäpuhtauksia sekä puussa kiinni olevan tapetin. Myös lahonnut purkupuu kelpaa."
  },
  {
    name: 'metalli',
    underline: false,
    map: metalli,
    information: "metalli voidaan toimittaa alueelle ilmaiseksi. Metalliin kuuluvat muun muassa, polkupyörät, kaasugrillit, kattopelti, kiukaat, tyhjät ja avatut tynnyrit sekä sammuttimet "
  },
  {
    name: "vaaralliset jätteet",
    underline: false,
    map: metalli,
    information: "nämä ovat vaarallisia jätteitä"
  },
  {
    name: "kattohuopa",
    underline: false,
    map: metalli,
    information: "nämä ovat vaarallisia jätteitä"
  },
  {
    name: "elektroniikka",
    underline: false,
    map: metalli,
    information: "nämä ovat vaarallisia jätteitä"
  },
  {
    name: "asbesti",
    underline: false,
    map: metalli,
    information: "nämä ovat vaarallisia jätteitä"
  }
]

const Home = () =>  {

  const [filter, setFilter] = useState('')
  const [open, setOpen] = useState(false)
  const [map, setMap] = useState('')
  const [name, setName] = useState('')
  const [information, setInformation] = useState("")
  const [items, setItems] = useState(list)
  const [down, setDown] = useState(true)

  const handleFilterAdd = (event) => {
    setFilter(event.target.value)
  }

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

  const HandleArrowClick = () => {
    setOpen(!open)
    setDown(!down)
  }

  const filteredItems = items.filter(item => item.name.toUpperCase().substring(0, filter.length).indexOf(filter.toUpperCase()) >= 0)
  const renderList = filteredItems.map(item => <li key={item.name} className="link" style={item.underline ? {textDecorationLine: "underline"} : {}} onClick={() => handleResultChange(item)}>{item.name}</li>)

  if (items.length === filteredItems.length | filteredItems.length === 0) {
    return (
      <div className="App">
        <Navbar/>
        <h1>Kiertokapulan lajitteluhaku</h1>
        <div className="inputwrap">
          <div style={filteredItems.length === 0 ? {display: "none"} : {display: ""}}>
            <p className="arrow1" style={down ? {display: ""} : {display: "none"}} onClick={HandleArrowClick}><i className="arrow down"></i></p>
            <p className="arrow2" style={!down ? {display: ""} : {display: "none"}} onClick={HandleArrowClick}><i className="arrow up"></i></p>
          </div>
          <input placeholder="etsi jätettä" value={filter} onChange={handleFilterAdd}/>
        </div>
        <ul style={open | filteredItems.length === 0 ? {display: ""} : {display: "none"}}>{renderList}</ul>
        <p style={filteredItems.length === 0 ? {display: ""} : {display: "none"}}>Ei hakutuloksia</p>
        <Template name={name} map={map} information={information} />
        <Footer/>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar/>
      <h1>Kiertokapulan lajitteluhaku</h1>
      <div className="inputwrap">
          <input placeholder="etsi jätettä" value={filter} onChange={handleFilterAdd}/>
        </div>
      <ul>{renderList}</ul>
      <Template name={name} map={map} information={information} />
      <Footer/>
    </div>
  );
}

export default Home
