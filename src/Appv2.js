import React, { useState } from 'react';
import './App.css';
import Ruutu from "./ruutu.js";

function Appv2() {
 
  const nappi = {
    x: "X",
    o: "O",
    tyhja: " "
  };
  const [vuoro, setVuoro] = useState(true);
  const [lauta, setLauta] = useState([nappi.tyhja, nappi.tyhja, nappi.tyhja, 
                                      nappi.tyhja, nappi.tyhja, nappi.tyhja, 
                                      nappi.tyhja, nappi.tyhja, nappi.tyhja]);

/*     const ruutuaKlikattu= (i) => {
      if (lauta[i] === nappi.tyhja) {
          const kopio = lauta.slice() 
          if (vuoro) {
              
              kopio.splice(i,1,nappi.x)
              setLauta(kopio);
              setVuoro(false);
          } else {
              kopio.splice(i,1,nappi.o)
              setLauta(kopio);
              setVuoro(true);
          }
      }
  }
                                  
 */

  function ruutuaKlikattu(i) {
    if (lauta[i] === nappi.tyhja) {
        const kopio = lauta.slice() 
        if (vuoro) {
            
            kopio.splice(i,1,nappi.x)
            setLauta(kopio);
            setVuoro(false);
        } else {
            kopio.splice(i,1,nappi.o)
            setLauta(kopio);
            setVuoro(true);
        }
    }
}

  return (
  <div className="App">
    <header className="App-header">
 
      <div className="game">
          <Ruutu indeksi="0" ruuduntila={lauta[0]} funktio={()=>ruutuaKlikattu(0)} />
          <Ruutu indeksi="1" ruuduntila={lauta[1]} funktio={()=>ruutuaKlikattu(1)} />
          <Ruutu indeksi="2" ruuduntila={lauta[2]} funktio={ruutuaKlikattu} />
          <Ruutu indeksi="3" ruuduntila={lauta[3]} funktio={ruutuaKlikattu} />
          <Ruutu indeksi="4" ruuduntila={lauta[4]} funktio={ruutuaKlikattu} />
          <Ruutu indeksi="5" ruuduntila={lauta[5]} funktio={ruutuaKlikattu} />
          <Ruutu indeksi="6" ruuduntila={lauta[6]} funktio={ruutuaKlikattu} />
          <Ruutu indeksi="7" ruuduntila={lauta[7]} funktio={ruutuaKlikattu} />
          <Ruutu indeksi="8" ruuduntila={lauta[8]} funktio={ruutuaKlikattu} />
      </div>
    </header>
  </div>
  );
}
export default Appv2;

function App() {
 
    const nappi = {
      x: "X",
      o: "O",
      tyhja: " "
    };
    const [vuoro, setVuoro] = useState(true);
    const [lauta, setLauta] = useState([nappi.tyhja, nappi.tyhja, nappi.tyhja, 
                                        nappi.tyhja, nappi.tyhja, nappi.tyhja, 
                                        nappi.tyhja, nappi.tyhja, nappi.tyhja]);
  /* 
      const ruutuaKlikattu= (i) => {
        if (lauta[i] === nappi.tyhja) {
            const kopio = lauta.slice() 
            if (vuoro) {
                
                kopio.splice(i,1,nappi.x)
                setLauta(kopio);
                setVuoro(false);
            } else {
                kopio.splice(i,1,nappi.o)
                setLauta(kopio);
                setVuoro(true);
            }
        }
    }
                                    
   */ 
    function ruutuaKlikattu(i) {
      if (lauta[i] === nappi.tyhja) {
          const kopio = lauta.slice() 
          if (vuoro) {
              
              kopio.splice(i,1,nappi.x)
              setLauta(kopio);
              setVuoro(false);
          } else {
              kopio.splice(i,1,nappi.o)
              setLauta(kopio);
              setVuoro(true);
          }
      }
  }
  
                                        
   
    return (
    <div className="App">
      <header className="App-header">
   
        <div className="game">
            <Ruutu indeksi="0" ruuduntila={lauta[0]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="1" ruuduntila={lauta[1]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="2" ruuduntila={lauta[2]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="3" ruuduntila={lauta[3]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="4" ruuduntila={lauta[4]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="5" ruuduntila={lauta[5]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="6" ruuduntila={lauta[6]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="7" ruuduntila={lauta[7]} funktio={ruutuaKlikattu} />
            <Ruutu indeksi="8" ruuduntila={lauta[8]} funktio={ruutuaKlikattu} />
        </div>
      </header>
    </div>
    );
  }
  export default App;