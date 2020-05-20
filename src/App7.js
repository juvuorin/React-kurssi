import React, { useState, useEffect } from 'react';
import './App.css';
//import Ruutu from "./Ruutu.js";
//import Kortti from "./Kortti.js";
import { render } from 'react-dom';
import selmaKuva1 from './images/selma1.png';
import selmaKuva2 from './images/selma2.png';
import selmaKuva3 from './images/selma3.png';
import selmaKuva4 from './images/selma4.png';
import selmaKuva5 from './images/selma5.png';
import selmaKuva6 from './images/selma6.png';
import selmaKuva7 from './images/selma7.png';
import selmaKuva8 from './images/selma8.png';
import pateKuva from './images/pate.png';

const App7 = () => {

    function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    let pelikortit = [{ kuvapuoliNäkyy: false, kuva: selmaKuva1 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva2 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva3 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva4 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva5 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva6 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva7 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva8 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva1 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva2 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva3 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva4 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva5 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva6 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva7 },
    { kuvapuoliNäkyy: false, kuva: selmaKuva8 }];
    const [kortit, setKortit] = useState(shuffle(pelikortit));
    const [korttiKlikattu, setKorttiKlikattu] = useState(false)
    const [valittuKortti, setValittuKortti] = useState(-1)
    const [toinenValittuKortti, setToinenValittuKortti] = useState(-1)

    const [pakkasekoitettu, setPakkasekoitettu] = useState(false)

    //Tätä funktiota kutsutaan, kun komponentti näytetään ensimmäisen kerran -> []
//    useEffect(() => {
        //let kortit = kuvat.concat(kuvat);
//        setKortit(pelikortit);
//        setPakkasekoitettu(true);
//    }, []);

    const piilotaKäännetytKortit = () => {
        let kopio = kortit.slice();
        kopio[valittuKortti].kuvapuoliNäkyy = false;
        kopio[toinenValittuKortti].kuvapuoliNäkyy = false;
        setKortit(kopio);

    }
    useEffect(() => {
        if (toinenValittuKortti > -1) {
            setTimeout(() => {
                piilotaKäännetytKortit();
                setToinenValittuKortti(-1);
            }, 2000);
        }
    });
    const kuvaValittu = (indeksi) => {
        console.log("Click!")
        if (korttiKlikattu) {
            if (kortit[indeksi].kuva == kortit[valittuKortti].kuva) {

                console.log("Oikein meni")
                let kopio = kortit.slice();
                kopio[indeksi].kuvapuoliNäkyy = true;
                setKortit(kopio);
                setKorttiKlikattu(false);

            } else {
                let kopio = kortit.slice();
                kopio[indeksi].kuvapuoliNäkyy = true;
                setKortit(kopio);
                setToinenValittuKortti(indeksi);
                setKorttiKlikattu(false);
            }


        } else {

            setValittuKortti(indeksi)
            setKorttiKlikattu(true);
            let kopio = kortit.slice();
            kopio[indeksi].kuvapuoliNäkyy = true;
            setKortit(kopio);

        }


        //console.log(indeksi);
    }

    return <div className="muistipeli">

        {kortit.map((kortti, indeksi) => (
            <img src={kortti.kuvapuoliNäkyy ? kortti.kuva : pateKuva} className="kortti" onClick={() => kuvaValittu(indeksi)}></img>
        ))}


    </div>

}
export default App7;