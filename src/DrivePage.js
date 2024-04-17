import React from 'react';
import './DrivePage.css';

function DrivePage() {
  return (
    <div className="drive-page-container">
      <h1 className="title">Tu Nube</h1>
      <form className="drive-form">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default DrivePage;
