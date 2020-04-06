import React, { useState } from 'react';
import './App.css';

//Context API, userReducer Hook  / Redux
import Näppäin from './Näppäin';
const App3 = () => {
    const näppäimistö = ["+", "-", "*", "/",
        "7", "8", "9", "=",
        "4", "5", "6", "C",
        "1", "2", "3", "CE",
        "0", "M-", "M+"]
    const [näyttö, setNäyttö] = useState("");
    const näppäinPainettu = (painettuNäppäin) => {

        console.log(painettuNäppäin)
        switch (painettuNäppäin) {
            case "=":
                try {
                    //TypeScript on poikaa!
                    let m = eval(näyttö);
                    setNäyttö(eval(näyttö))
                } catch (e) {
                    setNäyttö("Error");
                }
                break;
            case "C":
                setNäyttö("");
                break;
            case "CE":
                setNäyttö(näyttö.toString().slice(0,-1))
                break;
            default:
                setNäyttö(näyttö + painettuNäppäin);
        }
    }

    return (
        <div className="taskulaskin">
            <input type="text" value={näyttö} className="näyttö"></input>
            {näppäimistö.map(alkio => <Näppäin alkio ={alkio} painettu={näppäinPainettu}/>)}
        </div>
    )
}
export default App3