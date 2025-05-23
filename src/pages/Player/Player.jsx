import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate,useParams } from 'react-router-dom'

const Player = () => {

  const{id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData]= useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMyZjhhZmFjNWI4NjNmMmNjMGQzZGM3Njc1ZGJlZSIsIm5iZiI6MTc0NzU1NTQwOC41MDcsInN1YiI6IjY4Mjk5NDUwZGU2YzQzNGQwMzhjMDEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8-QNuUotNb8iQbBflscaf76_0WgRYeVaNiPcnVnobk'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player