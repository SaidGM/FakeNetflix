import React, { useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import allMoviesService from '../apiServices/allMoviesServices';
import '../Styles/MovieDetails.css'
import { useParams } from 'react-router-dom';


function MovieDetails() {

  const [getMovieDetails, setGetMovieDetails] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    allMoviesService.getMovieDetails(id).then((data)=>{
      setGetMovieDetails(data)
    })},[]);

  return (
    <>
    <NavBar /> 
      <div className='bigPapa'>

        <div className='divData'>
          
          <h1 id='titleMovie'>{getMovieDetails.title}</h1>
          <h3 id='yearMovie'>{getMovieDetails.year}</h3>
          <p id='infoMovie'>{getMovieDetails.info}</p>
          
          <div id='btnDiv'>
            <button id='editBtn' className='btn'>Edit</button>
          </div>

        </div>

        <div className='divImg'>
          <img id='imgMovie' src={getMovieDetails.img}/>
        </div>

      </div>
      <div className='extraBtns'>
        <button id='viewBtn' className='btn'>View</button>
        <button id='dowloadBtn' className='btn'>Dowload</button>
      </div>
    </>
  )
}

export default MovieDetails
