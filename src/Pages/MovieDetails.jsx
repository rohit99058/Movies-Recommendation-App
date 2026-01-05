import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div className="container">Loading movie...</div>;
  }

  return (
    <div className="container details">
      <img src={movie.Poster} alt={movie.Title} />

      <div className="details-content">
        <h1>{movie.Title}</h1>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Rating:</strong> ⭐ {movie.imdbRating}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
