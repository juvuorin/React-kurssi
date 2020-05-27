import React, { useState, useEffect } from 'react';
import './App.css';


const App9 = () => {
    
    const [painikkeenTeksti, setPainikkeenTeksti] = useState("Paina tästä!")

    //useEffect, kutsutaan vain ensimmäisen piirtämisen jälkeen, []
    useEffect(() => {
        setPainikkeenTeksti("kutsuttiin efektiä")
        console.log("sivuvaikutus aiheutettu")
        }
    , []);
    const painikePainettu = (indeksi) => {
        setPainikkeenTeksti("Painettiin nappia")
        console.log("Click!")
    }

    return <button onClick={painikePainettu}>{painikkeenTeksti}</button>

}
export default App9;