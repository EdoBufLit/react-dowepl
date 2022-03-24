import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, i) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="movie" />
        </div>

      ))}
    </div>
  )
}
export default MovieList;