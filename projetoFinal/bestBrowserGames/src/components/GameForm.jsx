import React, { useState } from 'react';
import { addGame } from '../services/gameService';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function GameForm() {
  const navigate = useNavigate();
  const [gameData, setGameData] = useState({
    name: '',
    category: '',
    url: '',
    demoVideoUrl: '',
    description: '',
    imageUrl: '',
    user: localStorage.getItem('currentUser'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData({
      ...gameData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(gameData);
    navigate('/');
  };

  return (
    <div>
      <NavBar />
      <h2>Cadastro de Browser Game</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={gameData.name} onChange={handleChange} required />
        </label>
        <label>
          Descrição:
          <input type="text" name="description" value={gameData.description} onChange={handleChange} required maxLength={280}/>
        </label>
        <label>
          Categoria:
          <select name="category" value={gameData.category} onChange={handleChange} required>
            <option value="">Selecione uma categoria</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Puzzle">Puzzle</option>
          </select>
        </label>
        <label>
          URL de Acesso:
          <input type="url" name="url" value={gameData.url} onChange={handleChange} required />
        </label>

        <label>
          URL Vídeo:
          <input type="url" name="demoVideoUrl" value={gameData.demoVideoUrl} onChange={handleChange}/>
        </label>

        <label>
          URL Imagem:
          <input type="url" name="imageUrl" value={gameData.imageUrl} onChange={handleChange}/>
        </label>
        <button type="submit">Cadastrar Jogo</button>
      </form>
    </div>
  );
}

export default GameForm;
