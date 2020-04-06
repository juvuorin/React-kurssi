import React from 'react';

export function Kortti(props){
    return(
        
        <img src={props.kortti.näytä ? props.kortti.kuva : props.kortti.selkä} 
        className="kortti" onClick={()=>props.käännäKortti(props.indeksi)}></img>
        
    );
}

export default Kortti;