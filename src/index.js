import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import './styles/Mediacode.css';
import './styles/Header.css';
import reportWebVitals from './reportWebVitals';

require('events').EventEmitter.defaultMaxListeners = 15;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
