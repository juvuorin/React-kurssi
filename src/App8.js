import React, { useState, useEffect } from 'react';
import './App.css';

const App8 = () => {
    
    const [painikkeenTeksti, setPainikkeenTeksti] = useState("Paina tästä!")
    
    useEffect(() => {
            //setPainikkeenTeksti("kutsuttiin efektiä")
            setPainikkeenTeksti(painikkeenTeksti+"!")
            document.title="Moikka"
            console.log("kutsuttiin efektiä")
        }
    );
    const painikePainettu = (indeksi) => {
        console.log("Click!")
        setPainikkeenTeksti("nappia painettu!")
    }

    return <button onClick={painikePainettu}>{painikkeenTeksti}</button>

}
export default App8;