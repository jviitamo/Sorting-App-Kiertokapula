import React, { useState } from 'react'; 
import seka from './1.png'
import metalli from './2.jpg'
import puu from './3.jpg'
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

function Home() {

  const [filter, setFilter] = useState('')
  const [modal1, set1] = useState(false)
  const [modal2, set2] = useState(false)
  const [modal3, set3] = useState(false)
  const [map, setMap] = useState('')
  const [name, setName] = useState('')
  const [information, setInformation] = useState("")
  const [items, setItems] = useState(list)

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleResultChange = (item) => {
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

  const filteredItems = items.filter(item => item.name.toUpperCase().indexOf(filter.toUpperCase()) >= 0)
  const renderItems = filteredItems.map(item => <li className="link" style={item.underline ? {textDecorationLine: "underline"} : {}} onClick={() => handleResultChange(item)}>{item.name}</li>)

  if (items.length === filteredItems.length) {
    return (
      <div className="App">
        <Navbar modal1={modal1} modal2={modal2} modal3={modal3} set1={set1} set2={set2} set3={set3} />
        <h1>Kiertokapulan lajitteluhaku</h1>
        <input value={filter} onChange={handleFilterChange}/>
        <Template name={name} map={map} information={information} />
        <Footer/>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar modal1={modal1} modal2={modal2} modal3={modal3} set1={set1} set2={set2} set3={set3} />
      <h1>Kiertokapulan lajitteluhaku</h1>
      <input value={filter} onChange={handleFilterChange}/>
      <ul>{renderItems}</ul>
      <Template name={name} map={map} information={information} />
      <Footer/>
    </div>
  );
}

export default Home
