import React, { useContext } from 'react'
import '../List/ListItem.css'
import {  MoviesContext } from '../Context/MoviesContext'


function ListItem() {
    const {topRate} = useContext( MoviesContext )
    
    return (
        <div className='list-item'> 
            {topRate.length > 0 && topRate.map((movie, key) =>(
              <div className="movieRow--item">
                <img key={key} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
              </div>
            ))}

        </div>
    )
}

export default ListItem
