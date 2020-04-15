import React, { useState, useReducer, useContext } from 'react';
import './App.css';
import RuutuCtx from "./RuutuCtx.js";
import { render } from 'react-dom';
import { store } from './store.js';
const Pelitila = {

    NIMI_X_MUUTTUI: 'NIMI_X_MUUTTUI',
    NIMI_O_MUUTTUI: 'NIMI_O_MUUTTUI',
    ALOITA_PAINETTU: 'ALOITA_PAINETTU',
    RUUTU_VALITTU: 'RUUTU_VALITTU',
    PELI_OHI: 'PELI_OHI'
}
const App6 = () => {

  // const [state, dispatch] = useReducer(reducer, initialState);

    const globalState = useContext(store);
    const { dispatch, state } = globalState;

    const nimiOMuuttui = (tapahtuma) => {    
        dispatch({ type: Pelitila.NIMI_O_MUUTTUI, data: tapahtuma.target.value })
    }
    const nimiXMuuttui = (tapahtuma) => {  
        dispatch({ type: Pelitila.NIMI_X_MUUTTUI, data: tapahtuma.target.value })
    }
    const aloitaNappiPainettu = () => {
        dispatch({ type: Pelitila.ALOITA_PAINETTU })

    }
    const ruutuValittu = (indeksi) => {
        dispatch({ type: Pelitila.RUUTU_VALITTU, data: indeksi })
    }

    //  {voittikoX() && "X voitti"}
    return (<div className="App">
        <header className="App-header">

            <br></br>
            {!state.peliKäynnissä && <button onClick={aloitaNappiPainettu}>Aloita peli</button>}
            {(state.pelaajat[0].length < 1 || state.pelaajat[1].length < 1) && <div>Kirjoita pidemmät nimet!</div>}
            Pelaaja O<input type="text" value={state.pelaajat[0]} onChange={(event) => nimiOMuuttui(event)} ></input>
            Pelaaja X<input type="text" value={state.pelaajat[1]} onChange={(event) => nimiXMuuttui(event)}></input>

            <br></br>
            <div className="ristinollapeli"  >
                {state.peliKäynnissä && state.pelilauta.map(alkio => <RuutuCtx ruuduntila={alkio} />)}
               
            </div>
            {state.voittaja != -1 && "Voittaja on " + state.pelaajat[state.voittaja]}

        </header>
    </div>)

}
export default App6
