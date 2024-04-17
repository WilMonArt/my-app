// En MainWelcome.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router
import './MainWelcome.css'; // Importa los estilos CSS

function MainWelcome() {
  return (
    <div className="main-welcome-container">
      <h1 className="title">HD PLAY</h1>
      <h2 className="subtitle">Bienvenido a HD Play</h2>
      <p className="description">Estamos encantados de darte la bienvenida a tu nueva experiencia musical, donde la melodía se une con la comodidad de la nube. Con nuestra aplicación, tu música favorita te seguirá a donde vayas, sin importar el dispositivo que uses.</p>
      <Link to="/login">Iniciar sesión</Link> {/* Enlace a la página de inicio de sesión */}
    </div>
  );
}

export default MainWelcome;
