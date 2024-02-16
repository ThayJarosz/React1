import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById, saveGameReview, updateGameReview } from '../services/gameService';

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userReview, setUserReview] = useState(null);

  useEffect(() => {
    // Obter os detalhes do jogo pelo ID
    getGameById(id)
      .then((gameData) => {
        setGame(gameData);
        // Verificar se o usuário já avaliou o jogo
        const userReview = getUserReviewFromLocalStorage(gameData.id);
        if (userReview) {
          setUserReview(userReview);
          setRating(userReview.rating);
          setComment(userReview.comment);
        }
      })
      .catch((error) => {
        console.error('Erro ao obter detalhes do jogo:', error);
      });
  }, [id]);

  // Função para obter a avaliação do usuário do localStorage
  const getUserReviewFromLocalStorage = (gameId) => {
    return JSON.parse(localStorage.getItem(`game_review_${gameId}`));
  };

  // Função para salvar a avaliação do usuário
  const saveReview = () => {
    const reviewData = {
      gameId: game.id,
      rating,
      comment
    };
    // Verificar se o usuário já avaliou o jogo anteriormente
    if (userReview) {
      updateGameReview(reviewData)
        .then(() => {
          alert('Avaliação atualizada com sucesso!');
          // Atualizar a avaliação no localStorage
          localStorage.setItem(`game_review_${game.id}`, JSON.stringify(reviewData));
        })
        .catch((error) => {
          console.error('Erro ao atualizar avaliação:', error);
        });
    } else {
      saveGameReview(reviewData)
        .then(() => {
          alert('Avaliação salva com sucesso!');
          // Salvar a avaliação no localStorage
          localStorage.setItem(`game_review_${game.id}`, JSON.stringify(reviewData));
        })
        .catch((error) => {
          console.error('Erro ao salvar avaliação:', error);
        });
    }
  };

  return (
    <div>
      {game && (
        <div>
          <h2>{game.name}</h2>
          <p>Categoria: {game.category}</p>
          <p>Descrição: {game.description}</p>
          {/* Adicione campos para avaliação */}
          <label>
            Rating:
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
            Comment:
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          </label>
          <button onClick={saveReview}>Salvar Avaliação</button>
        </div>
      )}
    </div>
  );
}

export default GameDetails;
