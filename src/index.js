import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';*/
//import App6 from './App6';
import App7 from './App7';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './store.js';
 
//Tämä harjoitustyötä 7 varten!
/*const app = (
    <StateProvider>
      <App6 />
    </StateProvider>
  ); 
 */
const app = (
      <App7 />
  );

  //ReactDOM.render(<App5/>, document.getElementById('root'));
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
