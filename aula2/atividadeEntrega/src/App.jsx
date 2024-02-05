// App.jsx
import MovieList from "./MovieList";

function App() {
    const fakeMovies = [
        {
            id: 1,
            title: 'Como eu era antes de você',
            genre: 'Romance/Comédia',
            releaseYear: 2016,
            rating: 4.8,
            image: 'https://br.web.img2.acsta.net/pictures/16/02/03/19/11/303307.jpg',
        },
        {
            id: 2,
            title: 'Star Trek',
            genre: 'Ficção Científica',
            releaseYear: 2009,
            rating: 4.7,
            image: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/69/66/20108900.jpg',
        },
        {
            id: 3,
            title: 'A Freira',
            genre: 'Terror/Mistério',
            releaseYear: 2018,
            rating: 3.8,
            image: 'https://image.tmdb.org/t/p/original/9ShELeGBnk5HYgI0cLfDuS4JMb3.jpg',
        },
    ];

    return (
        <div className="app">
            <h1>Catálogo de Filmes</h1>
            <MovieList movies={fakeMovies} />
        </div>
    )
}

export default App;
