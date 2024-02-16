import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameList from '../components/GameList';
import { getGames } from '../services/gameService';

function Home() {
  const [games, setGames] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
    // Fetch games from backend when component mounts
    getGames().then((data) => setGames(data));
  }, []);

  const filteredGames = games.filter((game) => {
    // Filtra os jogos pelo critério de busca por nome e categoria
    const nameMatch = game.name.toLowerCase().includes(searchName.toLowerCase());
    const categoryMatch = game.category.toLowerCase().includes(searchCategory.toLowerCase());
    return nameMatch && categoryMatch;
  });

  const handleNameSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleCategorySearchChange = (e) => {
    setSearchCategory(e.target.value);
  };

  return (
    <div>
      <h1>Best Browser Games</h1>
      <Link to="/profile">Perfil</Link> {/* Link para a página de perfil */}
      <Link to="/game-form">Cadastrar Novo Jogo</Link> {/* Link para o formulário de cadastro de jogos */}
      <div>
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={searchName}
          onChange={handleNameSearchChange}
        />
        <input
          type="text"
          placeholder="Buscar por categoria..."
          value={searchCategory}
          onChange={handleCategorySearchChange}
        />
      </div>
      <GameList games={filteredGames} />
    </div>
  );
}

export default Home;
