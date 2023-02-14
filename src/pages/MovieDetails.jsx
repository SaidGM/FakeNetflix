import React from 'react'
import jason from '../data/MoviesData'

function MovieDetails() {
  return (
    <>
        <img id='moviePoster' src={jason[0].img}/>
        <h1>{jason[0].title}</h1>
        <button>Edit</button>
        <p>{jason[0].categorie}</p>
        <h3>{jason[0].year}</h3>
        <p>{jason[0].info}</p>
        <button>View</button>
        <button>Dowload</button>
    </>
  )
}

export default MovieDetails
