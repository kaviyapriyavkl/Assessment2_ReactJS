import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movies = [
    { id: 1, title: 'Kalki', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/04/Kalki-2898-AD-1.jpg' },
    { id: 2, title: 'Garudan', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: 'https://assetscdn1.paytm.com/images/cinema/Garudan-05x750-74275de0-1bf1-11ef-bee8-8b90ac5cda97.jpg?format=webp&imwidth=322' },
    { id: 3, title: 'Maharaja', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', imageUrl: 'https://assetscdn1.paytm.com/images/cinema/Garudan-05x750-74275de0-1bf1-11ef-bee8-8b90ac5cda97.jpg?format=webp&imwidth=322', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTE0ZjY3MTUtYzUwMy00ZWEzLTgwMTYtMjg3ZDE1NTMxOTE4XkEyXkFqcGc@._V1_.jpg' },
  ];
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <div className="movie-detail">
      <div className="movie-info">
       
        <div className="Box">
          <div className="card">
            <div className="image">
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
            <div className="descript">
              <p>{movie.description}</p>
              <div className="book-now">
                <Link to={`/book/${id}`} className="btn-book-now">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
