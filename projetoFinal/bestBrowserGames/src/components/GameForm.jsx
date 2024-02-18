import React, { useState } from 'react';
import { addGame } from '../services/gameService';
import NavBar from './NavBar';

function GameForm() {
  const [gameData, setGameData] = useState({
    name: '',
    category: '',
    url: '',
    demoVideoUrl: '',
    description: '',
    imageUrl: ''
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
    // Limpar o formulário após o envio
    setGameData({
      name: '',
      category: '',
      url: '',
      demoVideoUrl: '',
      description: '',
      imageUrl: ''
    });
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
          Categoria:
          <select name="category" value={gameData.category} onChange={handleChange} required>
            <option value="">Selecione uma categoria</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
            <option value="Puzzle">Puzzle</option>
            {/* Adicione mais opções de categoria conforme necessário */}
          </select>
        </label>
        <label>
          URL de Acesso:
          <input type="url" name="url" value={gameData.url} onChange={handleChange} required />
        </label>
        {/* Adicione os outros campos necessários (demoVideoUrl, description, imageUrl) aqui */}
        <button type="submit">Cadastrar Jogo</button>
      </form>
    </div>
  );
}

export default GameForm;
