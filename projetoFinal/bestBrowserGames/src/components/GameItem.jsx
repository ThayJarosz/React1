import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameItem({ game, onEdit, onDelete }) {
  const navigate = useNavigate();
  const isUser = game.user == localStorage.getItem('currentUser');

  const handleEditClick = () => {
    onEdit(game.id);
    navigate(`/game-edit-form/${game.id}`);
  };

  const handleDeleteClick = async () => {
    await onDelete(game.id);
    navigate(0);
  };

  return (
    <div className='game-card'>
      <h3>{game.name}</h3>
      <p>Categoria: {game.category}</p>
      <img src={game.imageUrl}></img>
      <p>Descrição: {game.description}</p>
      {isUser && (
          <>
            <button onClick={handleEditClick}>Editar</button>
            <button onClick={handleDeleteClick}>Excluir</button>
          </>
        )
      }
    </div>
  );
}

export default GameItem;
