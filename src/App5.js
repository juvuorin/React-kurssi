import React, { useState, useReducer } from 'react';
import './App.css';
import Ruutu from "./Ruutu.js";
import { render } from 'react-dom';

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
const pelitilat = {

    ALOITA_PELI: 'ALOITA_PELI',
    NIMI_X_MUUTTUI: 'NIMI_X_MUUTTUI',
    NIMI_O_MUUTTUI:'NIMI_O_MUUTTUI',
    NAPPI_PAINETTU:'NAPPI_PAINETTU' 

}

const reducer = (state, action) => { 
    let kopio = state.pelaajat.slice()
  switch (action.type) {

    case pelitilat.NIMI_X_MUUTTUI:
     
      kopio[1] = action.data
      return {...state, pelaajat:kopio }

    case pelitilat.NIMI_O_MUUTTUI:
     
      kopio[0] = action.data
      return {...state, pelaajat:kopio }


    case pelitilat.ALOITA_PELI:
      if (state.pelaajat[0].length > 0 && state.pelaajat[1].length > 0) {
        return {...state, peliKäynnissä:true }
      } else {
        return {...state}
      }

      case pelitilat.NAPPI_PAINETTU:
  
        if (state.pelilauta[action.data].nappula == " " && state.voittaja==-1) {
            let kopio = state.pelilauta.slice()
            if (state.pelivuoroX) {
      
              kopio[action.data].nappula = nap.x

              if (voittaakoTämäPelaaja(kopio, nap.x)) {
                return {...state, pelilauta:kopio, pelivuoroX:false, voittaja:1}

                } else  {
             

              return {...state, pelilauta:kopio, pelivuoroX:false}
            
            }
           //   setPelilauta(kopio)
           //   setPelivuoroX(false)
            } else {
      
              kopio[action.data].nappula = nap.o
//              setPelilauta(kopio)
//              setPelivuoroX(true)
                if (voittaakoTämäPelaaja(kopio, nap.o)) {
            return {...state, pelilauta:kopio, pelivuoroX:false, voittaja:0} }
            else{

                return {...state, pelilauta:kopio, pelivuoroX:true}
            }
            }
          }



    default:
        throw Error();
  }
  

}

const App5 = () => {


  const initialValue = {pelilauta: [{ nappula: nap.tyhja, paikka: 0 }, { nappula: nap.tyhja, paikka: 1 }, { nappula: nap.tyhja, paikka: 2 },
    { nappula: nap.tyhja, paikka: 3 }, { nappula: nap.tyhja, paikka: 4 }, { nappula: nap.tyhja, paikka: 5 },
    { nappula: nap.tyhja, paikka: 6 }, { nappula: nap.tyhja, paikka: 7 }, { nappula: nap.tyhja, paikka: 8 }],
   pelivuoroX: true, peliKäynnissä:false, pelaajat:["",""],voittaja:-1}

 
  //const [teksti, setTeksti] = useState("")
  //const [näytäNappula, setNäytäNappula] = useState(false)
  //const [pelivuoroX, setPelivuoroX] = useState(true)
  //const [peliKäynnissä, setPelikäynnissä] = useState(false)
  //[0] = Pelaaja O, [1] = Pelaaja X
  //const [pelaajat, setPelaajat] = useState(["", ""])
  //const [voittaja, setVoittaja] = useState(-1)

  const    [state, dispatch]  =     useReducer(reducer, initialValue)
 

  


  
  const nimiOMuuttui = (tapahtuma) => {

    dispatch({type: pelitilat.NIMI_O_MUUTTUI,data : tapahtuma.target.value} )
    //let kopio = pelaajat.slice()
    //kopio[0] = tapahtuma.target.value
    //setPelaajat(kopio);
  }
  const nimiXMuuttui = (tapahtuma) => {

    dispatch({type: pelitilat.NIMI_X_MUUTTUI,data : tapahtuma.target.value} )
    //let kopio = pelaajat.slice()
    //kopio[1] = tapahtuma.target.value
    //setPelaajat(kopio);

  }


  /* const [teksti, setTeksti] = useState("")
  const [näytäNappula, setNäytäNappula] = useState(false)
  const [pelivuoroX,setPelivuoroX] =useState(true)
  const [peliKäynnissä,setPelikäynnissä] = useState(false)
  //[0] = Pelaalja O, [1] = Pelaaja X
  const [pelaajat, setPelaajat] = useState (["", ""])
   */

  const aloitaNappiPainettu = () => {
    
    dispatch({type: pelitilat.ALOITA_PELI})


  /*   if (pelaajat[0].length > 0 && pelaajat[1].length > 0) {
      setPelikäynnissä(true)
    } else {

    } */

  }
  const ruutuValittu = (indeksi) => {


    dispatch({type: pelitilat.NAPPI_PAINETTU, data:indeksi})

    /* if (pelilauta[indeksi].nappula == " " && voittaja==-1) {
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
    } */
    //Conditional rendering
  }

/*   <br></br>
  {!peliKäynnissä && <button onClick={aloitaNappiPainettu}>Aloita peli</button>}
  {(pelaajat[0].length < 1 || pelaajat[1].length < 1) && <div>Kirjoita pidemmät nimet!</div>}

  <br></br>
  <div className="ristinollapeli"  >
    {peliKäynnissä && pelilauta.map(alkio => <Ruutu funktio={ruutuValittu} ruuduntila={alkio} />)}

  </div>
  {voittaja!=-1 && "Voittaja on "+pelaajat[voittaja]}
 */


  //  {voittikoX() && "X voitti"}
  return (<div className="App">
    <header className="App-header">
      Pelaaja O<input type="text" value={state.pelaajat[0]} onChange={(event) => 
        dispatch({type: pelitilat.NIMI_O_MUUTTUI,data : event.target.value} ) } ></input>
      Pelaaja X<input type="text" value={state.pelaajat[1]} onChange={(event) => 
        dispatch({type: pelitilat.NIMI_X_MUUTTUI,data : event.target.value} )}></input>
   
      <br></br>
    {!state.peliKäynnissä && <button onClick={aloitaNappiPainettu}>Aloita peli</button>}
    {(state.pelaajat[0].length < 1 || state.pelaajat[1].length < 1) && <div>Kirjoita pidemmät nimet!</div>}

    <div className="ristinollapeli"  >
    {state.peliKäynnissä && state.pelilauta.map(alkio => <Ruutu funktio={ruutuValittu} ruuduntila={alkio} />)}

  </div>
  {state.voittaja!=-1 && "Voittaja on "+state.pelaajat[state.voittaja]}
    </header>
  </div>)

}
export default App5