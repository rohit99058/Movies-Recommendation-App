import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import MovieCard from "../Components/MovieCard";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search</h1>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSearch={searchMovies}
      />

      {loading && <p>Loading movies...</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
