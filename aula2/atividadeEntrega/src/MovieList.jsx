import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    genre={movie.genre}
                    releaseYear={movie.releaseYear}
                    rating={movie.rating}
                    image={movie.image}
                />
            ))}
        </div>
    )
}

export default MovieList;