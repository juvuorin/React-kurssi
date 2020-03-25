import React, { useState } from 'react';
import './App.css';
import Ruutu from "./ruutu.js";

function App() {

  const nap = {
    x: "X",
    o: "O",
    tyhja: " "
  };


/*   const [pelilauta,setPelilauta] = useState([pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja,
                                            pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja,
                                            pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja])
 */  //  const [nimi,setNimi] = useState("Liisa")
  const [vuoro,setVuoro] = useState(true)
 // const [vuoro,setVuoro] = useState(0)
 const [pelilauta,setPelilauta] = useState(
   [{nappula: nap.tyhja, paikka: 0 },{nappula: nap.tyhja, paikka : 1},{nappula: nap.tyhja, paikka : 2},
    {nappula: nap.tyhja, paikka : 3},{nappula: nap.tyhja, paikka : 4},{nappula: nap.tyhja, paikka : 5},
    {nappula: nap.tyhja, paikka : 6},{nappula: nap.tyhja, paikka : 7},{nappula: nap.tyhja, paikka : 8}])
  function ruutuPainettu(indeksi) {
    if (pelilauta[indeksi].nappula==nap.tyhja) {
    if (vuoro===true) {
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
    }
    //setNimi(tapahtuma.target.value )
    console.log(indeksi)
  }
  return (<div className="App">
          <header className="App-header">
        <div className="game">
         
        {pelilauta.map((alkio)=>
          (<Ruutu ruuduntila={alkio} funktio={ruutuPainettu} />))
        }      
    </div>
  </header>
</div>)

}
export default App