import React, {useState} from 'react';


const MovieCard = ({movie}) => {
  //state hooks for title and description

  return (
    <div className="movie-app">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className="rating"> {movie.rating}/10</div>
      </div>
    </div>
  );
}

export default MovieCard
