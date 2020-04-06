import React, { useState } from 'react';
import './App.css';
import Ruutu from "./Ruutu.js";
import { render } from 'react-dom';

const App1 = () => {

  const voittorivit =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

  const nap = {
    x: "X",
    o: "O",
    tyhja: " "
  };


  const [pelilauta, setPelilauta] = useState(
    [{ nappula: nap.tyhja, paikka: 0 }, { nappula: nap.tyhja, paikka: 1 }, { nappula: nap.tyhja, paikka: 2 },
    { nappula: nap.tyhja, paikka: 3 }, { nappula: nap.tyhja, paikka: 4 }, { nappula: nap.tyhja, paikka: 5 },
    { nappula: nap.tyhja, paikka: 6 }, { nappula: nap.tyhja, paikka: 7 }, { nappula: nap.tyhja, paikka: 8 }])

  const [teksti, setTeksti] = useState("")
  const [näytäNappula, setNäytäNappula] = useState(false)
  const [pelivuoroX, setPelivuoroX] = useState(true)
  const [peliKäynnissä, setPelikäynnissä] = useState(false)
  //[0] = Pelaaja O, [1] = Pelaaja X
  const [pelaajat, setPelaajat] = useState(["", ""])
  const [voittaja, setVoittaja] = useState(-1)


  function voittaakoTämäPelaaja(lauta, pelaaja) {

    return voittorivit.some(x => {
      if (lauta[x[0]] != nap.tyhja
        && lauta[x[0]].nappula == pelaaja
        && lauta[x[1]].nappula == pelaaja
        && lauta[x[2]].nappula == pelaaja) {
        return true
      }

    });

  }

  /*  const voittikoX = () => {
 
     return voittorivit.some(alkio=>{
       if (pelilauta[alkio[0]].nappula =="X" && pelilauta[alkio[1]].nappula=="X" && pelilauta[alkio[2]].nappula=="X") {
         return true;
       }
     
 
     }) */



  /*    for (let voittorivi in voittorivit) {  
       if (pelilauta[voittorivi[0]] =="X" && pelilauta[voittorivi[1]]=="X" && pelilauta[voittorivi[2]]=="X") {
         return true;
       }
     } 
   }*/
  function tekstiMuuttui(event) {
    if (event.target.value == "salasana") {
      setNäytäNappula(true)
    }
    setTeksti(event.target.value);
  }
  const nimiOMuuttui = (tapahtuma) => {
    let kopio = pelaajat.slice()
    kopio[0] = tapahtuma.target.value
    setPelaajat(kopio);
  }
  const nimiXMuuttui = (tapahtuma) => {
    let kopio = pelaajat.slice()
    kopio[1] = tapahtuma.target.value
    setPelaajat(kopio);

  }


  /* const [teksti, setTeksti] = useState("")
  const [näytäNappula, setNäytäNappula] = useState(false)
  const [pelivuoroX,setPelivuoroX] =useState(true)
  const [peliKäynnissä,setPelikäynnissä] = useState(false)
  //[0] = Pelaalja O, [1] = Pelaaja X
  const [pelaajat, setPelaajat] = useState (["", ""])
   */

  const aloitaNappiPainettu = () => {

    if (pelaajat[0].length > 0 && pelaajat[1].length > 0) {
      setPelikäynnissä(true)
    } else {

    }

  }
  const ruutuValittu = (indeksi) => {
    if (pelilauta[indeksi].nappula == " " && voittaja==-1) {
      let kopio = pelilauta.slice()
      if (pelivuoroX) {

        kopio[indeksi].nappula = nap.x
        setPelilauta(kopio)
        setPelivuoroX(false)
      } else {

        kopio[indeksi].nappula = nap.o
        setPelilauta(kopio)
        setPelivuoroX(true)
      }
      if (voittaakoTämäPelaaja(kopio, nap.x)) {
        setVoittaja(1)
      } else {
        if (voittaakoTämäPelaaja(kopio, nap.o)) {
          setVoittaja(0)
        }
      }
    }
    //Conditional rendering
  }

  //  {voittikoX() && "X voitti"}
  return (<div className="App">
    <header className="App-header">

      Pelaaja O<input type="text" value={pelaajat[0]} onChange={(event) => nimiOMuuttui(event)} ></input>
      Pelaaja X<input type="text" value={pelaajat[1]} onChange={(event) => nimiXMuuttui(event)}></input>
      <br></br>
      {!peliKäynnissä && <button onClick={aloitaNappiPainettu}>Aloita peli</button>}
      {(pelaajat[0].length < 1 || pelaajat[1].length < 1) && <div>Kirjoita pidemmät nimet!</div>}

      <br></br>
      <div className="ristinollapeli"  >
        {peliKäynnissä && pelilauta.map(alkio => <Ruutu funktio={ruutuValittu} ruuduntila={alkio} />)}

      </div>
      {voittaja!=-1 && "Voittaja on "+pelaajat[voittaja]}

    </header>
  </div>)

}
export default App1