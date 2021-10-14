import React from 'react'
import './Home.css'
import { BiCaretRight, BiInfoCircle } from "react-icons/bi";


function Home() {
    return (
        <div className='home-page'>
          {/* <video autoPlay loop muted id='video'>
              <source src="https://www.youtube.com/watch?v=Ajc5oGYNF8E&ab_channel=NetflixLatinoam%C3%A9rica" type='video/mp4' />
          </video>   */}
          
          <img src="https://bloglatino.it/wp-content/uploads/2021/10/la-vendette-delle-juana-stagione-2.jpg" alt="" />
          <div className='info'>
          <h1 className='title-movie'>The five Juanas</h1>
          <h2>#3 in Israel Today</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae ipsa porro numquam! Optio praesentium illo ex ut doloremque. Cupiditate, reiciendis minus? Quia expedita commodi qui soluta sit! Velit, natus.</p>
            <div className='buttons'>
                <span className='play-btn'> <BiCaretRight size= '1.5em'/> Play</span>
                <span className='info-btn'> <BiInfoCircle size= '1.5em'/>  More Info</span>
            </div>
          </div>

   
        </div>

    )
}

export default Home
