function MovieCard({ id, title, genre, releaseYear, rating, image }) {
    return (
        <div id={id} className="movie-card">
            <h2>{title}</h2>
            <img src={image} alt={title} className="movie-image" />
            <p>Gênero: {genre}</p>
            <p>Ano de lançamento: {releaseYear}</p>
            <p>Avaliação: {rating}</p>
        </div>
    )
}

export default MovieCard;
