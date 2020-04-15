import React, { useState, useReducer, useContext } from 'react';
import { store } from './store.js';
const Pelitila = {

    NIMI_X_MUUTTUI: 'NIMI_X_MUUTTUI',
    NIMI_O_MUUTTUI: 'NIMI_O_MUUTTUI',
    ALOITA_PAINETTU: 'ALOITA_PAINETTU',
    RUUTU_VALITTU: 'RUUTU_VALITTU',
    PELI_OHI: 'PELI_OHI'
}

export function Ruutu(props){
    const globalState = useContext(store);
    const { dispatch, state } = globalState;

    return(
        <button className="peliruutu" onClick={()=>dispatch({type:Pelitila.RUUTU_VALITTU,data: props.ruuduntila.paikka})}>
           {props.ruuduntila.nappula}
        </button>
    );
}

export default Ruutu;
