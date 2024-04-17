import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './login.css'; // Importa el archivo de estilos CSS

function Login() {
  // Estado para almacenar el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {/* Utiliza un Link para redirigir a la página DrivePage */}
        <Link to="/DrivePage">
          <button type="submit">Iniciar sesión</button>
        </Link>
      </form>
      {/* Agrega el enlace a la página DrivePage */}
      <p>¿No tienes una cuenta? <Link to="/DrivePage">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;
