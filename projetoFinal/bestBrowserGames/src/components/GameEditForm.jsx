import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById, updateGame } from '../services/gameService';
import { useNavigate } from 'react-router-dom';

function GameEditForm({ onSave, onCancel }) {
  const navigate = useNavigate();
  const [editedGame, setEditedGame] = useState({
    id: '',
    name: '',
    category: '',
    url: '',
    demoVideoUrl: '',
    description: '',
    imageUrl: ''
  });

  const { id } = useParams(); // Obtém o gameId da rota

  // Carregar os detalhes do jogo do localStorage com base no ID obtido da rota
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const game = await getGameById(id);
        if (game) {
          setEditedGame(game);
        }
      } catch (error) {
        console.error('Erro ao carregar o jogo:', error);
      }
    };

    fetchGame();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGame({
      ...editedGame,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateGame(id, editedGame);
      //onSave(editedGame);
    } catch (error) {
      console.error('Erro ao salvar o jogo:', error);
    }
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Editar Game</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={editedGame.name} onChange={handleChange} required />
        </label>
        <label>
          Categoria:
          <input type="text" name="category" value={editedGame.category} onChange={handleChange} required />
        </label>
        <label>
          URL de Acesso:
          <input type="text" name="url" value={editedGame.url} onChange={handleChange} required />
        </label>
        <label>
          URL Vídeo:
          <input type="text" name="demoVideoUrl" value={editedGame.demoVideoUrl} onChange={handleChange} />
        </label>
        <label>
          Descrição:
          <textarea name="description" value={editedGame.description} onChange={handleChange} required />
        </label>
        <label>
          URL Imagem:
          <input type="text" name="imageUrl" value={editedGame.imageUrl} onChange={handleChange} required />
        </label>
        <button type="submit">Salvar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default GameEditForm;
