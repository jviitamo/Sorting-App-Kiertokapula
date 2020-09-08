import seka from './photos/1.png'
import metalli from './photos/2.jpg'
import puu from './photos/3.jpg'
import vaaralliset from './photos/vaaralliset-min.jpg'
import kattohuopa from './photos/kattohuopa-min.jpg'
import elektroniikka from './photos/elektroniikka-min.jpg'
import asbesti from './photos/asbesti-min.jpg'

const Puolmatka = [
    {
      name: 'sekajäte Puolmatka',
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
      map: vaaralliset,
      information: "nämä ovat vaarallisia jätteitä. Huolehdi vaarallisten jätteiden lajittelusta tuomalla ne Kiertokapulan vaarallisten jätteiden lajittelupisteelle."
    },
    {
      name: "kattohuopa",
      underline: false,
      map: kattohuopa,
      information: "Kattohuopaa hyödynnetään jatkokäsittelyssä monin tavoin, muun muassa asfaltoinnissa. "
    },
    {
      name: "elektroniikka",
      underline: false,
      map: elektroniikka,
      information: "Elektroniikka, eli SER-jäte."
    },
    {
      name: "asbesti",
      underline: false,
      map: asbesti,
      information: "Asbesti on vaarallista  jätettä, ja tulee pakata pusseihin selkeästi merkittynä"
    }
  ]
  
  const MetsaTuomela = [
    {
      name: 'sekajäte Metsä-Tuomela',
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
      map: vaaralliset,
      information: "nämä ovat vaarallisia jätteitä. Huolehdi vaarallisten jätteiden lajittelusta tuomalla ne Kiertokapulan vaarallisten jätteiden lajittelupisteelle."
    },
    {
      name: "kattohuopa",
      underline: false,
      map: kattohuopa,
      information: "Kattohuopaa hyödynnetään jatkokäsittelyssä monin tavoin, muun muassa asfaltoinnissa. "
    },
    {
      name: "elektroniikka",
      underline: false,
      map: elektroniikka,
      information: "Elektroniikka, eli SER-jäte."
    },
    {
      name: "asbesti",
      underline: false,
      map: asbesti,
      information: "Asbesti on vaarallista  jätettä, ja tulee pakata pusseihin selkeästi merkittynä"
    }
  ]
  
  const Karanoja = [
    {
      name: 'sekajäte Karanoja',
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
      map: vaaralliset,
      information: "nämä ovat vaarallisia jätteitä. Huolehdi vaarallisten jätteiden lajittelusta tuomalla ne Kiertokapulan vaarallisten jätteiden lajittelupisteelle."
    },
    {
      name: "kattohuopa",
      underline: false,
      map: kattohuopa,
      information: "Kattohuopaa hyödynnetään jatkokäsittelyssä monin tavoin, muun muassa asfaltoinnissa. "
    },
    {
      name: "elektroniikka",
      underline: false,
      map: elektroniikka,
      information: "Elektroniikka, eli SER-jäte."
    },
    {
      name: "asbesti",
      underline: false,
      map: asbesti,
      information: "Asbesti on vaarallista  jätettä, ja tulee pakata pusseihin selkeästi merkittynä"
    }
  ]
  
  const Lumikorpi = [
    {
      name: 'sekajäte Lumikorpi',
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
      map: vaaralliset,
      information: "nämä ovat vaarallisia jätteitä. Huolehdi vaarallisten jätteiden lajittelusta tuomalla ne Kiertokapulan vaarallisten jätteiden lajittelupisteelle."
    },
    {
      name: "kattohuopa",
      underline: false,
      map: kattohuopa,
      information: "Kattohuopaa hyödynnetään jatkokäsittelyssä monin tavoin, muun muassa asfaltoinnissa. "
    },
    {
      name: "elektroniikka",
      underline: false,
      map: elektroniikka,
      information: "Elektroniikka, eli SER-jäte."
    },
    {
      name: "asbesti",
      underline: false,
      map: asbesti,
      information: "Asbesti on vaarallista  jätettä, ja tulee pakata pusseihin selkeästi merkittynä"
    }
  ]
  
  const Kapula = [
    {
      name: 'sekajäte Kapula',
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
      map: vaaralliset,
      information: "nämä ovat vaarallisia jätteitä. Huolehdi vaarallisten jätteiden lajittelusta tuomalla ne Kiertokapulan vaarallisten jätteiden lajittelupisteelle."
    },
    {
      name: "kattohuopa",
      underline: false,
      map: kattohuopa,
      information: "Kattohuopaa hyödynnetään jatkokäsittelyssä monin tavoin, muun muassa asfaltoinnissa. "
    },
    {
      name: "elektroniikka",
      underline: false,
      map: elektroniikka,
      information: "Elektroniikka, eli SER-jäte."
    },
    {
      name: "asbesti",
      underline: false,
      map: asbesti,
      information: "Asbesti on vaarallista  jätettä, ja tulee pakata pusseihin selkeästi merkittynä"
    }
  ]

  export default { Puolmatka, Kapula, MetsaTuomela, Karanoja, Lumikorpi }