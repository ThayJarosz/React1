// userService.js

// Função para obter os usuários do localStorage ao iniciar o aplicativo
const loadUsersFromLocalStorage = () => {
  const usersFromStorage = localStorage.getItem('users'); // Obtém os usuários do localStorage
  return usersFromStorage ? JSON.parse(usersFromStorage) : []; // Retorna os usuários convertidos de JSON para objeto ou um array vazio se não houver usuários armazenados
};

// Função para salvar os usuários no localStorage
const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users)); // Converte os usuários para JSON e os armazena no localStorage com a chave 'users'
};

// Carregar os usuários do localStorage ao iniciar o aplicativo
let users = loadUsersFromLocalStorage(); // Inicializa a variável 'users' com os usuários obtidos do localStorage

// Função para adicionar um novo usuário
export const addUser = (user) => {
  const newUser = { ...user, id: Date.now() }; // Adiciona um ID único ao novo usuário baseado no tempo atual
  users.push(newUser); // Adiciona o novo usuário à lista de usuários
  saveUsersToLocalStorage(users); // Salva a lista atualizada de usuários no localStorage
};

// Função para obter todos os usuários
export const getUsers = () => {
  return users; // Retorna a lista de usuários
};

// Função para atualizar os dados de um usuário existente
export const updateUser = (userId, updatedUserData) => {
  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updatedUserData }; // Atualiza os dados do usuário com base no ID fornecido
    }
    return user;
  });
  saveUsersToLocalStorage(users); // Salva a lista atualizada de usuários no localStorage
};
