import MovieList from "./MovieList";


function App() {
  const fakeMovies = [
    {
      id: 1,
      title: 'Como eu era antes de você',
      genre: 'Romance/Comédia',
      releaseYear: 2016,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Star Trek',
      genre: 'Ficção Científica',
      releaseYear: 2009,
      rating: 4.7,
    },
  ];


  return (
    <div className="app">
      <h1>Catálogo de Filmes</h1>
      <MovieList movies={fakeMovies} />
    </div>
  )
}

export default App
