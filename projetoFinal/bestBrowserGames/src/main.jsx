import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import GameForm from './components/GameForm.jsx';
import GameEditForm from './components/GameEditForm.jsx';

const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// Função para renderizar a rota de login se o usuário não estiver autenticado
const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<Home />} />,
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<Profile />} />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/game-form",
    element: <PrivateRoute element={<GameForm />} />,
  },
  {
    path: "/game-edit-form/:id",
    element: <PrivateRoute element={<GameEditForm />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
