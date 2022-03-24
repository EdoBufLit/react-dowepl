import MovieList from "./MovieList"
import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';

const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  )
}

export default MovieListHeading