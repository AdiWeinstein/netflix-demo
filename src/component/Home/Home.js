import React, { useEffect, useState, useContext } from 'react'
import '../Home/Home.css'
import { BiCaretRight, BiInfoCircle } from "react-icons/bi";
import {  MoviesContext } from '../Context/MoviesContext'

function Home() {

  const img_api = 'https://image.tmdb.org/t/p/w1280'
  const popularMovie = useContext( MoviesContext )

    return (
        <div className='home-page'>
          {/* <video autoPlay loop muted id='video'>
              <source src="https://www.youtube.com/watch?v=Ajc5oGYNF8E&ab_channel=NetflixLatinoam%C3%A9rica" type='video/mp4' />
          </video>   */}
          
          <img src={img_api + popularMovie.movie.backdrop_path} alt={popularMovie.movie.title} />
          <div className='info'>
          <h1 className='title-movie'>{popularMovie.movie.title}</h1>
          <h2>{popularMovie.movie.vote_average}</h2>
          <p>{popularMovie.movie.overview}</p>
            <div className='buttons'>
                <button className='play-btn'> <BiCaretRight size= '1.5em'/> Play</button>
                <button className='info-btn'> <BiInfoCircle size= '1.5em'/>  More Info</button>
            </div>
          </div>

   
        </div>

    )
}

export default Home
