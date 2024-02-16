import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function GameItem({ game, onEdit, onDelete }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    // Chama a função onEdit passando o ID do jogo como argumento
    onEdit(game.id);
    navigate(`/game-edit-form/${game.id}`);
  };

  const handleDeleteClick = () => {
    // Chama a função onDelete passando o ID do jogo como argumento
    onDelete(game.id);
  };

  return (
    <div>
      <h3>{game.name}</h3>
      <p>Categoria: {game.category}</p>
      
      <Link to={`/game-details/${game.id}`} key={game.id}>
        Detalhes
        </Link>
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Excluir</button>
    </div>
  );
}

export default GameItem;
