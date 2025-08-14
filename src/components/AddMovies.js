import React, {useState} from 'react';

const AddMovies = ({onAddMovies}) => {

    const [newMovie, setNewMovie] = useState({
        title:'',
        description:'',
        posterURL:'',
        rating:''
    });

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setNewMovie(prev => ({...prev, [name]:value}));
    };
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating){
            onAddMovies({
                ...newMovie,
                id:Date.now(),
                rating:parseFloat(newMovie.rating)
            });
            setNewMovie({title:'',description:'',posterURL:'',rating:'',})
        }
    }
  return (
   <form className='add-movie' onSubmit={handleSubmit}>
    <h2>Add new Movie</h2>
    <input 
    name="title"
    placeholder='Title'
    value={newMovie.title}
    onChange={handleInputChange}
    required
    />

   </form>
  )
}

export default AddMovies
