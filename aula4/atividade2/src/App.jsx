import React, { useState } from 'react';

const AppNews = () => {
  const [showArticles, setShowArticles] = useState(true);

  const toggleArticles = () => {
    setShowArticles(!showArticles);
  };

  return (
    <div>
      <h1>Últimas Notícias</h1>
      {showArticles && (
        <article>
          <h2>Título do Artigo 1</h2>
          <p>Conteúdo do Artigo 1...</p>
        </article>
      )}
      <button onClick={toggleArticles}>
        {showArticles ? 'Ocultar Artigos' : 'Exibir Artigos'}
      </button>
    </div>
  );
};

export default AppNews;
