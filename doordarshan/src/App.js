import { useState, useEffect } from 'react';
import './App.css';
import Movie from './components/Movie'

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() =>{async function fetchData() {
    const movieResp = await fetch(FEATURED_API);
    const movieData = await movieResp.json();
    console.log(movieData.results);
    setMovies(movieData.results);}
    fetchData();
  },[]);
  return (
    <div className="App">
      {movies.map((movie) => <Movie movie/>)}
    </div>
  );
}

export default App;
