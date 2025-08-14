import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovies from './components/AddMovies';


function App() {
  const [movies, setMovies]=useState([
    {
      id:1,
      title:"Inception",
      description:"good movie",
      posterURL:"",
      rating:5.5
    },
  ])
   const [filteredMovies, setFilteredMovies] = useState(movies);

   const handleFilterChange = (filters) => {
     const filtered = movies.filter((movie) => {
       const titleMatch = movie.title
         .toLowerCase()
         .includes(filters.title.toLowerCase());
       const rateMatch = filters.rate
         ? movie.rating >= Number(filters.rate)
         : true;
       return titleMatch && rateMatch;
     });
     setFilteredMovies(filtered);
   };

   const handleAddMovie = (movie) => {
     setMovies((prev) => [...prev, movie]);
     setFilteredMovies((prev) => [...prev, movie]);
   };
  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter onFilterChange={handleFilterChange} />
      <AddMovies onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
