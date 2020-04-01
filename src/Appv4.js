import React, { useState } from 'react';
import './App.css';
import Ruutu from "./ruutu.js";

var counter = 0

function Appv4() {

    const nap = {
        x: "X",
        o: "O",
        tyhja: " "
    };

    const [vuoro, setVuoro] = useState(true) //true tarkoittaa, että X aloittaa
    const [kierrokset, setKierrokset] = useState(0)

      const [pelilauta, setPelilauta] = useState(
        [{ nappula: nap.tyhja, paikka: 0 }, { nappula: nap.tyhja, paikka: 1 }, { nappula: nap.tyhja, paikka: 2 },
        { nappula: nap.tyhja, paikka: 3 }, { nappula: nap.tyhja, paikka: 4 }, { nappula: nap.tyhja, paikka: 5 },
        { nappula: nap.tyhja, paikka: 6 }, { nappula: nap.tyhja, paikka: 7 }, { nappula: nap.tyhja, paikka: 8 }])
  
/*           const [pelilauta, setPelilauta] = useState(
            [{ nappula: nap.o, paikka: 0 }, { nappula: nap.x, paikka: 1 }, { nappula: nap.o, paikka: 2 },
            { nappula: nap.tyhja, paikka: 3 }, { nappula: nap.x, paikka: 4 }, { nappula: nap.tyhja, paikka: 5 },
            { nappula: nap.tyhja, paikka: 6 }, { nappula: nap.o, paikka: 7 }, { nappula: nap.tyhja, paikka: 8 }]) */
      
    const voittorivit = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
/* 
    ["x","x","x","x","x"] =>10000
    ["x","x"," ","x"]   => 100
    ["x","x","x"]       => 60    
    ["x","x"]           => 30
 */

    function voittaakoTämäPelaaja(lauta, pelaaja) {

        return voittorivit.some(x => {
            if (lauta[x[0]]!=nap.tyhja 
                && lauta[x[0]].nappula == pelaaja 
                && lauta[x[1]].nappula == pelaaja
                && lauta[x[2]].nappula == pelaaja) {
                return true
            }

        });

    }

    function ruutuPainettu(indeksi) {
        if ((!voittaakoTämäPelaaja(pelilauta, nap.o) && !voittaakoTämäPelaaja(pelilauta, nap.x))) {
            if (pelilauta[indeksi].nappula == nap.tyhja && kierrokset < 5) {

                let kopio = pelilauta.slice()
                kopio[indeksi].nappula = nap.x
                if (kierrokset < 4) {
                    counter = 0
                    let paikka = tietokoneenSiirto(kopio);
                    kopio[paikka].nappula = nap.o
                    console.log(counter)

                }
                setPelilauta(kopio)
                setKierrokset(kierrokset + 1);
            }
        }
        //setNimi(tapahtuma.target.value )
        //console.log(indeksi)
    }
    function tietokoneenSiirto(lauta) {
        return minimax(lauta, nap.o).paikka;
    }
    function emptySquares(lauta) {
        return lauta.filter(item => item.nappula === nap.tyhja);
    }
    function minimax(newBoard, player) {
        let availableSpots = emptySquares(newBoard);

        if (voittaakoTämäPelaaja(newBoard, nap.x)) {
           /*  console.log("--------x voittaa----------")

            console.log(newBoard[0].nappula+newBoard[1].nappula+newBoard[2].nappula)
            console.log(newBoard[3].nappula+newBoard[4].nappula+newBoard[5].nappula)
            console.log(newBoard[6].nappula+newBoard[7].nappula+newBoard[8].nappula) */
            return { score: -10 }
        } else if (voittaakoTämäPelaaja(newBoard, nap.o)) {
           /*  console.log("--------o voittaa----------")

            console.log(newBoard[0].nappula+newBoard[1].nappula+newBoard[2].nappula)
            console.log(newBoard[3].nappula+newBoard[4].nappula+newBoard[5].nappula)
            console.log(newBoard[6].nappula+newBoard[7].nappula+newBoard[8].nappula) */
  
            return { score: 10 }
        } else if (availableSpots.length === 0) {
            return { score: 0 }
        }

        let moves = [];

        availableSpots.forEach((availableSpot) => {
            let move = {};
            move.paikka = newBoard[availableSpot.paikka].paikka;
            move.nappula = " "
            newBoard[availableSpot.paikka] = { nappula: player, paikka: move.paikka };

            if (player === nap.o) {
                let result = minimax(newBoard, nap.x);
                move.score = result.score;
            } else {
                let result = minimax(newBoard, nap.o);
                move.score = result.score;
            }

            newBoard[availableSpot.paikka] = { nappula: move.nappula, paikka: move.paikka }
            moves.push(move);
        })

        let bestMove;

        if (player === nap.o) {
            let bestScore = -10000;
            moves.forEach((move, index) => {
                if (move.score > bestScore) {
                    bestScore = move.score;
                    bestMove = index;
                }
            })
        }
        else {
            let bestScore = 10000;
            moves.forEach((move, index) => {
                if (move.score < bestScore) {
                    bestScore = move.score;
                    bestMove = index;
                }
            })
        }
         counter++;
      /*   if (counter > 100) {
            if ((counter % 100) == 0) console.log(counter);
        } else 
        { console.log(counter); }
       */ // console.log("Paras siirto:"+ moves[bestMove].paikka)
        return moves[bestMove];

    }

    return (<div className="App">
        <header className="App-header">
            <div className="game">

                {pelilauta.map((alkio) =>
                    (<Ruutu ruuduntila={alkio} funktio={ruutuPainettu} />))
                }
            </div>

        </header>
    </div>)

}
export default Appv4