import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DrivePage from './DrivePage'; // Importa el componente DrivePage
import Login from './Login';
import MainWelcome from './MainWelcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWelcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/DrivePage" element={<DrivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
