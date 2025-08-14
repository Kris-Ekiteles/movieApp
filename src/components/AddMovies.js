import React, { useState } from "react";
import "./AddMovies.css"

const AddMovies = ({ onAddMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      onAddMovies({
        ...newMovie,
        id: Date.now(),
        rating: parseFloat(newMovie.rating),
      });
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    }
  };
  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <h2>Add new Movie</h2>
      <input
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleInputChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleInputChange}
        required
      />
      <input 
      name="posterURL"
      placeholder="Poster URL here"
      value={newMovie.posterURL}
      onChange={handleInputChange}
      required
      />

      <input 
      name="rating"
      type="number"
      min='0'
      max="10"
      step="0.1"
      placeholder="rating(1-10)"
      value={newMovie.rating}
      onChange={handleInputChange}
      required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovies;
