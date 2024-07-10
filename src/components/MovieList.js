import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const movies = [
    { id: 1, title: 'Movie 1', img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/04/Kalki-2898-AD-1.jpg' },
    { id: 2, title: 'Movie 2', img: 'https://assetscdn1.paytm.com/images/cinema/Garudan-05x750-74275de0-1bf1-11ef-bee8-8b90ac5cda97.jpg?format=webp&imwidth=322' },
    { id: 3, title: 'Movie 3', img: 'https://m.media-amazon.com/images/M/MV5BMTE0ZjY3MTUtYzUwMy00ZWEzLTgwMTYtMjg3ZDE1NTMxOTE4XkEyXkFqcGc@._V1_.jpg' },
  ];

  return (
    <div className="movie-list">
      <nav className="movie-navbar">
      <h1 style={{ color: 'white' }}>Latest Movies</h1>
      </nav>
      <div className="movie-cards">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movies/${movie.id}`}>
              <img src={movie.img} alt={movie.title} />
              <h2>{movie.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
