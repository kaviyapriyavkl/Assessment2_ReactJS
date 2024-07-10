// // // import React from 'react';
// // // import { useParams, Link } from 'react-router-dom';
// // // import './MovieDetail.css';

// // // const MovieDetail = () => {
// // //   const { id } = useParams();
// // //   const movie = { title: `Movie ${id}`, description: `Description for movie ${id}` };

// // //   return (
// // //     <div className="movie-detail">
// // //       <h1>{movie.title}</h1>
// // //       <p>{movie.description}</p>
// // //       <Link to={`/book/${id}`}>Book Now</Link>
// // //     </div>
// // //   );
// // // };

// // // export default MovieDetail;
// // // MovieDetail.js

// // import React from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import './MovieDetail.css';

// // const MovieDetail = () => {
// //   const { id } = useParams();
// //   const movie = { title: `Movie ${id}`, description: `Description for movie ${id}` };

// //   return (
// //     <div className="movie-detail">
// //       <div className="movie-info">
// //         <h1>{movie.title}</h1>
// //         <p>{movie.description}</p>
// //       </div>
// //       <div className="book-now">
// //         <Link to={`/book/${id}`}>Book Now</Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieDetail;
// // MovieDetail.js

// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './MovieDetail.css';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const movie = { title: `Movie ${id}`, description: `Description for movie ${id}` };

//   return (
//     <div className="movie-detail">
//       <div className="movie-info">
//         <div className="title">
//           <h1>{movie.title}</h1>
//         </div>
//         <div className="Box">
//         <div className="description">
        
//           <p>{movie.description}</p>
//         </div>
//       <div className="book-now">
//         <Link to={`/book/${id}`}>Book Now</Link>
//       </div>
//       </div>
//       </div>
      
//     </div>
//   );
// };

// export default MovieDetail;
// MovieDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = { 
    title: `Movie ${id}`, 
    description: `Description for movie ${id}`, 
    imageUrl: `https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg`,  // Example image URL
  };
//   https://via.placeholder.com/300

  return (
    <div className="movie-detail">
      <div className="movie-info">
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="Box">
          <div className="card">
            <div className="image">
              <img src={movie.imageUrl} alt={movie.title} />
            </div>
            <div className="book-now">
              <Link to={`/book/${id}`} className="btn-book-now">Book Now</Link>
            </div>
          </div>
          <div className="description">
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
