// userService.js

// Função para obter os usuários do localStorage ao iniciar o aplicativo
const loadUsersFromLocalStorage = () => {
    const usersFromStorage = localStorage.getItem('users');
    return usersFromStorage ? JSON.parse(usersFromStorage) : [];
  };
  
  // Função para salvar os usuários no localStorage
  const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  // Carregar os usuários do localStorage ao iniciar o aplicativo
  let users = loadUsersFromLocalStorage();
  
  export const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    users.push(newUser);
    saveUsersToLocalStorage(users);
  };
  
  export const getUsers = () => {
    return users;
  };
  
  export const updateUser = (userId, updatedUserData) => {
    users = users.map(user => {
      if (user.id === userId) {
        return { ...user, ...updatedUserData };
      }
      return user;
    });
    saveUsersToLocalStorage(users);
  };
  