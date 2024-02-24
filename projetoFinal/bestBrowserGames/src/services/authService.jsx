// authService.js

import { getUsers } from '../services/userService'; // Importa a função 'getUsers' do serviço 'userService' para obter os usuários

// Função para realizar o login do usuário
export const loginUser = async (email, password) => {
  const users = getUsers(); // Obtém a lista de usuários
  
  // Verifica se existe algum usuário com o e-mail fornecido
  const user = users.find(user => user.email === email);
  
  // Se não houver usuário com o e-mail fornecido, lança um erro
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  // Verifica se a senha fornecida corresponde à senha do usuário encontrado
  if (user.password !== password) {
    throw new Error('Senha incorreta');
  }

  // Se as credenciais estiverem corretas, salva o estado de autenticação do usuário no localStorage
  localStorage.setItem('isAuthenticated', 'true');
  return user; // Retorna o usuário autenticado
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  // Verifica se o estado de autenticação do usuário está presente no localStorage
  return localStorage.getItem('isAuthenticated') === 'true';
};

// Função para realizar o logout do usuário
export const logoutUser = () => {
  // Remove o estado de autenticação do usuário do localStorage
  localStorage.removeItem('isAuthenticated');
};
