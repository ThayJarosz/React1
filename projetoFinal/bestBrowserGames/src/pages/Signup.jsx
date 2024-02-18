import React, { useState } from 'react';
import { addUser } from '../services/userService';
import { useNavigate } from 'react-router-dom'; 

function Signup() {
  const navigate = useNavigate();
  // Estado para armazenar os dados do formulário de cadastro
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    birthDate: '',
    state: '',
    country: ''
  });

  // Função para lidar com as alterações nos campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData); // Adiciona o usuário ao gameService
    alert('Cadastro realizado com sucesso!');
    // Resetar o formulário após o envio
    setFormData({
      fullName: '',
      email: '',
      password: '',
      birthDate: '',
      state: '',
      country: ''
    });
    navigate('/login');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome completo:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Data de nascimento:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </label>
        <label>
          Estado:
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
        </label>
        <label>
          País:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Signup;
