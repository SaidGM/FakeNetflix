import React from 'react'
import jason from '../data/MoviesData'
import '../Styles/MovieDetails.css'


function MovieDetails() {
  return (
    <div className='bigPapa'>
        <img id='imgMovie' src={jason[0].img}/>
        <h1 id='titleMovie'>{jason[0].title}</h1>
        <h3 id='yearMovie'>{jason[0].year}</h3>
        <p id='infoMovie'>{jason[0].info}</p>
        <p id='categorieMovie'>{jason[0].categorie}</p>
        <div id='btnDiv'>
          <button id='editBtn' className='btn'>Edit</button>
        </div>
        {/* <button id='viewBtn' className='btn'>View</button> */}
        {/* <button id='dowloadBtn' className='btn'>Dowload</button> */}
    </div>
  )
}

export default MovieDetails
