
import React from 'react';//Importa React
import ReactDOM from 'react-dom/client';// Biblioteca de React para hablar con los navegadores web (React DOM)

import './styles.css'; //los estilos para tus componentes

import App from './App';// el componente que creaste en App.js.



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log({ReactDOM})