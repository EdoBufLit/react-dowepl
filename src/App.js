import React, {useState, useEffect} from "react";
import MovieList from './components/MovieList.jsx'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox.jsx'
import AddFavourites from './components/AddFavourites.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


export default function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=550db127`;
    
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson)

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
