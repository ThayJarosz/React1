let games = JSON.parse(localStorage.getItem('games')) || [];

// Função para salvar os jogos no localStorage
const saveGamesToLocalStorage = () => {
  localStorage.setItem('games', JSON.stringify(games));
};

// Função para simular uma requisição GET para obter a lista de jogos
export async function getGames() {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms
    setTimeout(() => {
      resolve(games);
    }, 500);
  });
}

// Função para simular uma requisição GET para obter detalhes de um jogo pelo ID
export async function getGameById(id) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms
    setTimeout(() => {
      const game = games.find((game) => game.id === parseInt(id));
      if (game) {
        resolve(game);
      } else {
        reject(new Error('Jogo não encontrado'));
      }
    }, 500);
  });
}

// Função para simular uma requisição POST para adicionar um novo jogo
export async function addGame(gameData) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms
    setTimeout(() => {
      const newGame = {
        id: games.length + 1,
        ...gameData
      };
      games.push(newGame);
      saveGamesToLocalStorage(); // Salva os jogos no localStorage após adicionar um novo jogo
      resolve(newGame);
    }, 500);
  });
}

// Função para simular uma requisição PUT para atualizar um jogo existente
export async function updateGame(id, updatedGameData) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms
    setTimeout(() => {
      const index = games.findIndex((game) => game.id === parseInt(id));
      if (index !== -1) {
        games[index] = { ...games[index], ...updatedGameData };
        saveGamesToLocalStorage(); // Salva os jogos no localStorage após atualizar um jogo existente
        resolve(games[index]);
      } else {
        reject(new Error('Jogo não encontrado'));
      }
    }, 500);
  });
}

// Função para simular uma requisição DELETE para excluir um jogo
export async function deleteGame(id) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms
    setTimeout(() => {
      const index = games.findIndex((game) => game.id === parseInt(id));
      if (index !== -1) {
        const deletedGame = games.splice(index, 1)[0];
        saveGamesToLocalStorage(); // Salva os jogos no localStorage após excluir um jogo
        resolve(deletedGame);
      } else {
        reject(new Error('Jogo não encontrado'));
      }
    }, 500);
  });
}
