import React, { useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import allMoviesService from '../apiServices/allMoviesServices';
import '../Styles/MovieDetails.css'
import { useParams } from 'react-router-dom';


function MovieDetails() {

  const [getAllMovies, setGetAllMovies] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    allMoviesService.getAllMovies(id).then((data)=>{
      setGetAllMovies(data)
    })},[]);

  return (
    <>
    <NavBar />
      {getAllMovies.map((movie, key)=>{
        return(
          <div className='bigPapa' key={key.id}>
            <div className='divImg'>
              <img id='imgMovie' src={movie.img}/>
            </div>
            <div className='divData'>
              <h1 id='titleMovie'>{movie.title}</h1>
              <h3 id='yearMovie'>{movie.year}</h3>
              <p id='infoMovie'>{movie.info}</p>
              <p id='categorieMovie'>{movie.categorie}</p>
              <div id='btnDiv'>
                <button id='editBtn' className='btn'>Edit</button>
              </div>
              {/* <button id='viewBtn' className='btn'>View</button> */}
              {/* <button id='dowloadBtn' className='btn'>Dowload</button> */}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MovieDetails
