import React, { useState } from 'react';
import './App.css';
import Ruutu from "./ruutu.js";

function App() {
  const [pelilauta, setPelilauta] = useState ([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [teksti, setTeksti] = useState("")
  const [näytäNappula, setNäytäNappula] = useState(false)
  function tekstiMuuttui(event) {
    if (event.target.value == "salasana") {
      setNäytäNappula(true)
    }
    setTeksti(event.target.value);

  }
  const nappulaPainettu = () => {
    setTeksti("")
  }
  const ruutuValittu = () =>{
    console.log("Ruutuvalittu")

  }
  return (<div className="App">
    <header className="App-header">
      <div className="game">

      {pelilauta.map((alkio,indeksi) =>(<Ruutu key={indeksi} funktio={ruutuValittu} ruuduntila={alkio}/>))}


      </div>
    </header>
  </div>)

}
export default App