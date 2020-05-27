import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Esineet2 from './Esineet2'
//useReducer = REDUX
//Context API

//Axios, useEffect
const App12 = () => {

    //    const [data,setData] = useState(["Dataa haetaan"])

    const [data, setData] = useState([])
    const [kategoriaValittu, setKategoriaValittu] = useState(false)
    const [kategoriaId, setKategoriaId] = useState(0)
    const [näytäHuomautus, setNäytäHuomautus] = useState(false)
    const [näytäEsineet, setNäytäEsineet] = useState(true)

    useEffect(() => {
        async function haeDataa() {
            let result = await axios('https://api.huuto.net/1.1/categories');
            console.log(JSON.parse(result.request.response).categories);
            setData(JSON.parse(result.request.response).categories);

        }
        haeDataa();
    }, [])

    const kategoriaNappiPainettu = (id) => {

        setKategoriaValittu(true);
        setKategoriaId(id);
        // console.log(id)
    }
    const piilotaEsineet = (id) => {

        //var elem = document.getElementById("ideal");
        //elem.parentNode.removeChild(elem);
         setNäytäEsineet(false);   
    }

    return (<div id ="ideal">

        {data.map(alkio => <button onClick={() => kategoriaNappiPainettu(alkio.id)}>{alkio.title}</button>)
        }
        {kategoriaValittu==true && näytäEsineet==true ? <Esineet2 id={kategoriaId} piilotaEsineet={piilotaEsineet} ></Esineet2> :""}
       
        {näytäHuomautus && "Ootko vielä hereillä?"}
    </div>)
}

export default App12
