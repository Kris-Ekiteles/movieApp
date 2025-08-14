import React, {useState} from 'react';


const MovieCard = () => {
  //state hooks for title and description

  const [ltitle, setTitle] = useState('Default Title');
  const [description, setDescription]=useState('Default Description')
  return (
    <div>
<h1> movie app</h1>
 <div className='card'>
  <img src='' />
 </div>
    </div>
  )
}

export default MovieCard
