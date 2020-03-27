import React, { useState } from 'react';
import './App.css';
import Ruutu from "./ruutu.js";

function App() {

  //if(pelilauta[0].nappula == "X" && pelilauta[1].nappula == "X" && pelilauta[2].nappula == "X" ........ )

  const voittoRivit =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

  function onkoXVoittaja() {
    return voittoRivit.some(alkio => { //alkio [a,b,c]
      if (pelilauta[alkio[0]].nappula == "X" &&
        pelilauta[alkio[1]].nappula == "X" &&
        pelilauta[alkio[2]].nappula == "X") return true;
    });
  }
  function onkoOVoittaja() {
    return voittoRivit.some(alkio => { //alkio [a,b,c]
      if (pelilauta[alkio[0]].nappula == "O" &&
        pelilauta[alkio[1]].nappula == "O" &&
        pelilauta[alkio[2]].nappula == "O") return true;

    });

  }


  const nap = {
    x: "X",
    o: "O",
    tyhja: " "
  };
  

  /*   const [pelilauta,setPelilauta] = useState([pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja,
                                              pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja,
                                              pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja])
   */  //  const [nimi,setNimi] = useState("Liisa")
 
  const [vuoro, setVuoro] = useState(true)
  const [pelaajanXNimi, setPelaajanXNimi] = useState("")
  const [pelaajanONimi, setPelaajanONimi] = useState("")
  const [peliKäynnissä, setPeliKäynnissä] = useState(false)
  const [voittaja, setVoittaja] = useState("")

  // const [vuoro,setVuoro] = useState(0)
  const [pelilauta, setPelilauta] = useState(
    [{ nappula: nap.tyhja, paikka: 0 }, { nappula: nap.tyhja, paikka: 1 }, { nappula: nap.tyhja, paikka: 2 },
    { nappula: nap.tyhja, paikka: 3 }, { nappula: nap.tyhja, paikka: 4 }, { nappula: nap.tyhja, paikka: 5 },
    { nappula: nap.tyhja, paikka: 6 }, { nappula: nap.tyhja, paikka: 7 }, { nappula: nap.tyhja, paikka: 8 }])
  function ruutuPainettu(indeksi) {
    if (pelilauta[indeksi].nappula == nap.tyhja && voittaja=="") {
      if (vuoro === true) {
        let kopio = pelilauta.slice()
        kopio[indeksi].nappula = nap.x
        setPelilauta(kopio);
        setVuoro(false)

      } else {
        let kopio = pelilauta.slice()
        kopio[indeksi].nappula = nap.o
        setPelilauta(kopio);
        setVuoro(true)
      }
      if (onkoXVoittaja()) {
        setVoittaja("X")
      } else {
        if (onkoOVoittaja()) {
          setVoittaja("O")
        }
      }

    }
    //setNimi(tapahtuma.target.value )
    console.log(indeksi)
  }
  function aloitaNappiaPainettu() {
    if (pelaajanXNimi.length > 0 && pelaajanONimi.length > 0) {
      setPeliKäynnissä(true)
    }
  }
  return (<div className="App">
    <header className="App-header">

      Pelaajan X nimi:<input type="text" value={pelaajanXNimi}
        onChange={(event) => setPelaajanXNimi(event.target.value)} />

      <br></br>

      Pelaajan O nimi: <input type="text" value={pelaajanONimi}
        onChange={(event) => setPelaajanONimi(event.target.value)} />
      {!peliKäynnissä &&
        <button onClick={aloitaNappiaPainettu}>Aloita peli!</button>}
      {voittaja!="" && <div>Voittaja on {voittaja}</div>}
      {peliKäynnissä &&
        <div className="game">

          {pelilauta.map((alkio) =>
            (<Ruutu ruuduntila={alkio} funktio={ruutuPainettu} />))
          }
        </div>}
    </header>
  </div>)

}
export default App