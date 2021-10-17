import React, { useEffect, useState } from 'react'
import './Home.css'
import { BiCaretRight, BiInfoCircle } from "react-icons/bi";

function Home() {
  const [movie, setMovie] = useState([])
  const api_key = '7cf58da5d9ae83e611f1584dae05436b'
  const img_api = 'https://image.tmdb.org/t/p/w1280'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`)
    .then(res => res.json())
    .then(data => {
      console.log("movieData" , data)
      const results = data.results
      const newIndex = Math.floor(Math.random() * results.length)
      
      setMovie(results[newIndex])    })
    
  }, [])




    return (
        <div className='home-page'>
          {/* <video autoPlay loop muted id='video'>
              <source src="https://www.youtube.com/watch?v=Ajc5oGYNF8E&ab_channel=NetflixLatinoam%C3%A9rica" type='video/mp4' />
          </video>   */}
          
          <img src={img_api + movie.backdrop_path} alt={movie.title} />
          <div className='info'>
          <h1 className='title-movie'>{movie.title}</h1>
          <h2>{movie.vote_average}</h2>
          <p>{movie.overview}</p>
            <div className='buttons'>
                <span className='play-btn'> <BiCaretRight size= '1.5em'/> Play</span>
                <span className='info-btn'> <BiInfoCircle size= '1.5em'/>  More Info</span>
            </div>
          </div>

   
        </div>

    )
}

export default Home
