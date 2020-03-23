import React, { useState } from 'react';
import './App.css';
import Ruutu from "./ruutu.js";

function App() {

  const pelinappula = {
    x: "X",
    o: "O",
    tyhja: " "
  }
//  const [nimi,setNimi] = useState("Liisa")
//  const [oikein,setOikein] = useState(true)
  const [pelilauta,setPelilauta] = useState([pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja,
                                            pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja,
                                            pelinappula.tyhja,pelinappula.tyhja,pelinappula.tyhja])
  function tekstiMuuttui(indeksi) {
    //setNimi(tapahtuma.target.value)
    console.log(indeksi)
  }
  return (<div className="App">
          <header className="App-header">
        <div className="game">
        <Ruutu indeksi="0" ruuduntila={pelilauta[0]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="1" ruuduntila={pelilauta[1]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="2" ruuduntila={pelilauta[2]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="3" ruuduntila={pelilauta[3]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="4" ruuduntila={pelilauta[4]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="5" ruuduntila={pelilauta[5]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="6" ruuduntila={pelilauta[6]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="7" ruuduntila={pelilauta[7]} funktio={tekstiMuuttui} />
        <Ruutu indeksi="8" ruuduntila={pelilauta[8]} funktio={tekstiMuuttui} />
      
    </div>
  </header>
</div>)

}
export default App