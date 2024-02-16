import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import GameForm from './components/GameForm';
import GameEditForm from './components/GameEditForm.jsx';

function App() {
  // Função para verificar se o usuário está autenticado
  const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };

  // Função para renderizar a rota de login se o usuário não estiver autenticado
  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };

  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game-form" element={<PrivateRoute element={<GameForm />} />} />
          <Route path="/game-edit-form/:id" element={<PrivateRoute element={<GameEditForm />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
