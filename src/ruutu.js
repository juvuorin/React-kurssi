import React from 'react';

export function Ruutu(props){
    return(
        <button className="peliruutu" onClick={()=>props.funktio(props.ruuduntila.paikka)}>
           {props.ruuduntila.nappula}
        </button>
    );
}

export default Ruutu;