import React from 'react';
import GameItem from './GameItem';
import { deleteGame } from '../services/gameService';


function GameList({ games, onEdit, onDelete }) {
  const handleEdit = (gameId) => {
    console.log('Editando jogo com ID:', gameId);
    if (onEdit) {
      onEdit(gameId);
    }
  };

  const handleDelete = async (gameId) => {
    console.log('Excluindo jogo com ID:', gameId);
    await deleteGame(gameId)
      .then((deletedGame) => {
        if (onDelete) {
          onDelete(gameId);
        }
        alert('Jogo excluído com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao excluir jogo:', error);
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
