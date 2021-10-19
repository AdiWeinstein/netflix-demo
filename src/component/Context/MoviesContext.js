import React, { useState, useEffect } from "react";

// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749,`,
//     fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,

// }

export const MoviesContext = React.createContext({
    movies: [],
    topRate: [],
    original: [],
  });




export const MoviesProvider = ({ children }) => {

  const [movie, setMovie] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [original, setOriginal] = useState([])
  
  const URL = "https://api.themoviedb.org/3";
  const api_key = "7cf58da5d9ae83e611f1584dae05436b";

  useEffect(() => {
    fetch(`${URL}/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`)
      .then((res) => res.json())
      .then((data) => {
        console.log("movieData", data);
        const results = data.results;
        const newIndex = Math.floor(Math.random() * results.length);
        setMovie(results[newIndex]);
     
      });
  }, []);


  // Fetch Top Rate
  useEffect(() => {
    fetch(`${URL}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    .then((res) => res.json())
    .then((data) => {
    console.log("topRate", data);
    // const results = data.results;
    setTopRate(data.results);
    })
  },[]);

    // Fetch netflix original
    useEffect(() => {
        fetch(`${URL}/discover/tv?api_key=${api_key}&with_networks=213`)
        .then((res) => res.json())
        .then((data) => {
        console.log("topRate", data);
        // const results = data.results;
        setOriginal(data.results);
        })
      },[]);
    

  

  return (
    <MoviesContext.Provider
      value={{
        movie,
        setMovie,
        topRate,
        setTopRate,
        
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
