import React, { useState, useEffect } from 'react';
import './App.css';

const App10 = () => {
    
    const [painikkeenTeksti, setPainikkeenTeksti] = useState("Paina tästä!")
    

    //useEffect, kutsutaan vain jos painikkeenTeksti muuttuu
    useEffect(() => {
                console.log("Painikkeen teksti muuttui!")
        }
    , [painikkeenTeksti]);
    const painikePainettu = (indeksi) => {
        console.log("Click!")
        setPainikkeenTeksti("Hei tää asia on ny muuttunu!")
    }

    return <button>{painikkeenTeksti}</button>

}
export default App10;