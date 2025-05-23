import React, { useState, useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMyZjhhZmFjNWI4NjNmMmNjMGQzZGM3Njc1ZGJlZSIsIm5iZiI6MTc0NzU1NTQwOC41MDcsInN1YiI6IjY4Mjk5NDUwZGU2YzQzNGQwMzhjMDEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a8-QNuUotNb8iQbBflscaf76_0WgRYeVaNiPcnVnobk'
  }
};


  const handleWheel = (e) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
}
useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[]);
return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt=""/>
            <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards