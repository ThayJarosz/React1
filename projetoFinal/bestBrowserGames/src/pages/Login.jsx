import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService'; // Implemente essa função no seu serviço de autenticação
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Chama a função de login e obtém o usuário logado
      const user = await loginUser(email, password);
//console.log(user);
      // Salva as informações do usuário logado no local storage
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Redireciona para a página de perfil após o login bem-sucedido
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Trate o erro de login, exiba uma mensagem para o usuário, etc.
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Entrar</button>
      </form>

      <Link to="/signup">Cadastre-se</Link> {/* Link para a página de cadastro */}
    </div>
  );
}

export default Login;
