import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Esineet from './Esineet'
//useReducer = REDUX
//Context API

//Axios, useEffect
const App11 = () => {
  
//    const [data,setData] = useState(["Dataa haetaan"])

    const [data,setData] = useState([])
    const [kategoriaValittu,setKategoriaValittu] = useState(false)
    const [kategoriaId,setKategoriaId] = useState(0)
  
    useEffect(()=>{
      async function haeDataa(){
        let result = await axios('https://api.huuto.net/1.1/categories');
        console.log(JSON.parse(result.request.response).categories);
        setData(JSON.parse(result.request.response).categories);
        
      }
      
      haeDataa();

  },[])

    const kategoriaNappiPainettu = (id) => {

      setKategoriaValittu(true);
      setKategoriaId(id);
     // console.log(id)
    }

    return (<div>

        {data.map(alkio=><button onClick={()=>kategoriaNappiPainettu(alkio.id)}>{alkio.title}</button>)
        }
        {kategoriaValittu && <Esineet id = {kategoriaId} ></Esineet>}
        </div>)
}

export default App11