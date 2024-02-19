import React from 'react';
import GameItem from './GameItem';
import { deleteGame } from '../services/gameService';


function GameList({ games, onEdit, onDelete }) {
  const handleEdit = (gameId) => {
    // Implemente a lógica para editar um jogo com o ID fornecido
    console.log('Editando jogo com ID:', gameId);
    if (onEdit) {
      onEdit(gameId);
    }
  };

  const handleDelete = async (gameId) => {
    // Implemente a lógica para excluir um jogo com o ID fornecido
    console.log('Excluindo jogo com ID:', gameId);
    await deleteGame(gameId)
      .then((deletedGame) => {
        // Atualize o estado para refletir a exclusão do jogo
        if (onDelete) {
          onDelete(gameId);
        }
        alert('Jogo excluído com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao excluir jogo:', error);
        // Trate o erro de exclusão, exiba uma mensagem para o usuário, etc.
      });
  };

  return (
    <div>
      <h2>Games</h2>
      <div className='container'>
        {games.map((game) => (
          <GameItem key={game.id} game={game} onEdit={() => handleEdit(game.id)} onDelete={() => handleDelete(game.id)} />
        ))}
      </div>
    </div>
  );
}

export default GameList;
