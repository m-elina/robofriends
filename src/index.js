// Basis ist immer index.js
// react und index selbst importieren
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import Card from './Card'; */ /* Component importieren, das nur einen return hat (in diesem Fall ein div), Modul unten einfügen, Modul-Datei erstellen (Card.js in diesem Fall) (wurde auskommentiert, weil in CardLIst uebertragen) */
import App from './containers/App' /* soll jetzt der Vater aller Components sein */
// import CardList from './CardList'; auskommentiert, weil wir jetzt die Vater-COmponent App haben
import * as serviceWorker from './serviceWorker'; /* hat den Hintergrund, dass native Apps im Web genutzt werden können */
import 'tachyons'; /* in diesem Fall installiertes css Toolkit, mit dem man einfache css-Abkürzungen benutzen kann*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
