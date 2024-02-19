import React, { useState, useEffect } from 'react';
import GameList from '../components/GameList';
import { getGames } from '../services/gameService';
import NavBar from '../components/NavBar';

function Home() {
  const [games, setGames] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
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
      <NavBar />
      <h1>Best Browser Games</h1>
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
