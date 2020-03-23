import React from 'react';

export function Ruutu(props){
    return(
        <button className="nappi" onClick={()=>{
            props.funktio(props.indeksi)
            }}>
            {props.ruuduntila}
        </button>
    );
}

export default Ruutu;