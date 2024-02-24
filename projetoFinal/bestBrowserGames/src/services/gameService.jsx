let games = JSON.parse(localStorage.getItem('games')) || []; // Obtém os jogos do localStorage ou define como um array vazio se não houver nenhum

// Função para salvar os jogos no localStorage
const saveGamesToLocalStorage = () => {
  localStorage.setItem('games', JSON.stringify(games)); // Converte os jogos para JSON e os armazena no localStorage com a chave 'games'
};

// Função para simular uma requisição GET para obter a lista de jogos
export async function getGames() {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms antes de resolver a Promise
    setTimeout(() => {
      resolve(games); // Retorna a lista de jogos
    }, 500);
  });
}

// Função para simular uma requisição GET para obter detalhes de um jogo pelo ID
export async function getGameById(id) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms antes de resolver a Promise
    setTimeout(() => {
      const game = games.find((game) => game.id === parseInt(id)); // Procura o jogo na lista pelo ID
      if (game) {
        resolve(game); // Se encontrar o jogo, resolve a Promise com os detalhes do jogo
      } else {
        reject(new Error('Jogo não encontrado')); // Se não encontrar, rejeita a Promise com um erro
      }
    }, 500);
  });
}

// Função para simular uma requisição POST para adicionar um novo jogo
export async function addGame(gameData) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms antes de resolver a Promise
    setTimeout(() => {
      const newGame = {
        id: games.length + 1, // Define o ID do novo jogo como o próximo número sequencial
        ...gameData // Adiciona os dados do novo jogo
      };
      games.push(newGame); // Adiciona o novo jogo à lista de jogos
      saveGamesToLocalStorage(); // Salva os jogos no localStorage após adicionar um novo jogo
      resolve(newGame); // Resolve a Promise com os detalhes do novo jogo
    }, 500);
  });
}

// Função para simular uma requisição PUT para atualizar um jogo existente
export async function updateGame(id, updatedGameData) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms antes de resolver a Promise
    setTimeout(() => {
      const index = games.findIndex((game) => game.id === parseInt(id)); // Encontra o índice do jogo na lista pelo ID
      if (index !== -1) {
        games[index] = { ...games[index], ...updatedGameData }; // Atualiza os dados do jogo na lista
        saveGamesToLocalStorage(); // Salva os jogos no localStorage após atualizar um jogo existente
        resolve(games[index]); // Resolve a Promise com os detalhes do jogo atualizado
      } else {
        reject(new Error('Jogo não encontrado')); // Se o jogo não for encontrado, rejeita a Promise com um erro
      }
    }, 500);
  });
}

// Função para simular uma requisição DELETE para excluir um jogo
export async function deleteGame(id) {
  return new Promise((resolve, reject) => {
    // Simula uma pequena latência de 500ms antes de resolver a Promise
    setTimeout(() => {
      const index = games.findIndex((game) => game.id === parseInt(id)); // Encontra o índice do jogo na lista pelo ID
      if (index !== -1) {
        const deletedGame = games.splice(index, 1)[0]; // Remove o jogo da lista e obtém os detalhes do jogo excluído
        saveGamesToLocalStorage(); // Salva os jogos no localStorage após excluir um jogo
        resolve(deletedGame); // Resolve a Promise com os detalhes do jogo excluído
      } else {
        reject(new Error('Jogo não encontrado')); // Se o jogo não for encontrado, rejeita a Promise com um erro
      }
    }, 500);
  });
}
