import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


//Axios, useEffect Context API, usereducer, REDUX
const Esineet2 = (props) => {
    const [data,setData] = useState(["Dataa haetaan"])
    const [dataNoudettu, setDataNoudettu] = useState(false)
    const [valittuPaikkakunta, setValittuPaikkakunta] = useState("")
    const [näytäHuomautus, setNäytäHuomautus] = useState(false)

    

    useEffect(()=>{
        async function haeDataa(){
            let result = await axios('https://api.huuto.net/1.1/categories/'+props.id+'/items?area='+valittuPaikkakunta
            )
            //console.log(result)
            let a = JSON.parse(result.request.response).items
            setData(JSON.parse(result.request.response).items); 
            setDataNoudettu(true);   
        }
        
        haeDataa();

    },[props.id, valittuPaikkakunta])
    
    useEffect(() => {
        
        const timerHandle = setTimeout(() => {
            setNäytäHuomautus(true);
            console.log("ajastin "+timerHandle+" laukesi")
        }, 50000);
        console.log("ajastin "+timerHandle+" ajastettu!");
        return () => {

            //clearInterval?
            clearTimeout(timerHandle);        
            console.log("ajastin "+timerHandle+" poistettu")
            //setNäytäHuomautus(false);
        }
        });

    const paikkakuntaTamperePainettu = ()=>{
        setValittuPaikkakunta("Tampere")
    }
    const  paikkakuntaHelsinkiPainettu = ()=>{
        setValittuPaikkakunta("Helsinki")
    }
    const poistaEsineetNappiPainettu = (id) => {
         props.piilotaEsineet();   
    }

    return (<div>
        <button onClick={paikkakuntaTamperePainettu}>Tampere</button>
        <button onClick={paikkakuntaHelsinkiPainettu}>Helsinki</button>

        {!dataNoudettu ? "Odotetaan dataa..." :  data.map((alkio,indeksi)=><div key={indeksi}>{alkio.title +" Paikassa:"+alkio.location}</div>)}
        <button onClick={poistaEsineetNappiPainettu}>Poista komponentti</button>
        {näytäHuomautus && "Ootko vielä hereillä?"}

        </div>)
}

export default Esineet2