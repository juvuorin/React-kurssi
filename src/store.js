// store.js
import React, {createContext, useReducer} from 'react';

const Pelitila = {

    NIMI_X_MUUTTUI: 'NIMI_X_MUUTTUI',
    NIMI_O_MUUTTUI: 'NIMI_O_MUUTTUI',
    ALOITA_PAINETTU: 'ALOITA_PAINETTU',
    RUUTU_VALITTU: 'RUUTU_VALITTU',
    PELI_OHI: 'PELI_OHI'
}
const voittorivit =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

const nap = {
    x: "X",
    o: "O",
    tyhja: " "
};
const initialState = {
    pelilauta:
        [{ nappula: nap.tyhja, paikka: 0 }, { nappula: nap.tyhja, paikka: 1 }, { nappula: nap.tyhja, paikka: 2 },
        { nappula: nap.tyhja, paikka: 3 }, { nappula: nap.tyhja, paikka: 4 }, { nappula: nap.tyhja, paikka: 5 },
        { nappula: nap.tyhja, paikka: 6 }, { nappula: nap.tyhja, paikka: 7 }, { nappula: nap.tyhja, paikka: 8 }],
    tila: Pelitila.NIMET_PUUTTEELLISET, pelaajat: ["",""], pelivuoroX: true, voittaja: -1, peliKäynnissä: false
}


const voittaakoTämäPelaaja = (lauta, pelaaja) => {

    return voittorivit.some(x => {
        if (lauta[x[0]] != nap.tyhja
            && lauta[x[0]].nappula == pelaaja
            && lauta[x[1]].nappula == pelaaja
            && lauta[x[2]].nappula == pelaaja) {
            return true
        }
    });
}

//const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    
    let kopio = state.pelaajat.slice()

    switch (action.type) {

        case Pelitila.ALOITA_PAINETTU:

            if (state.pelaajat[0].length > 0 && state.pelaajat[1].length > 0) {
                return { ...state, peliKäynnissä: true };
            } else {
                return { ...state, peliKäynnissä: false };
            }

        case Pelitila.NIMI_O_MUUTTUI:

            kopio[0] = action.data
            return { ...state, pelaajat: kopio };

        case Pelitila.NIMI_X_MUUTTUI:

            kopio[1] = action.data
            return { ...state, pelaajat: kopio };

        case Pelitila.RUUTU_VALITTU:

            if (state.pelilauta[action.data].nappula == " " && state.voittaja == -1) {
                let kopio = state.pelilauta.slice()
                if (state.pelivuoroX) {

                    kopio[action.data].nappula = nap.x
                    if (voittaakoTämäPelaaja(kopio, nap.x)) {
                        return { ...state, pelilauta: kopio, pelivuoroX: false, voittaja: 1 }
                    } else {
                        return { ...state, pelilauta: kopio, pelivuoroX: false }
                    }
                    //setPelilauta(kopio)
                    //setPelivuoroX(false)
                } else {

                    kopio[action.data].nappula = nap.o
                    if (voittaakoTämäPelaaja(kopio, nap.o)) {
                        return { ...state, pelilauta: kopio, pelivuoroX: false, voittaja: 0 }
                    } else {

                        return { ...state, pelilauta: kopio, pelivuoroX: true }
                    }

                    //setPelilauta(kopio)
                    //setPelivuoroX(true)
                }
            }

        default:
            throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }