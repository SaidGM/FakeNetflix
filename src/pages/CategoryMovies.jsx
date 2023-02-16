import React, { useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import allCategoryMoviesService from '../apiServices/allCategoryMoviesService'
import { useParams } from 'react-router-dom'
import '../Styles/CategoryMovies.css'

function CategoryMovies() {
    
  const [getCategoryMovies, setGetCategoryMovies] = useState([])
  const {id} = useParams()
  
    useEffect(()=>{
        allCategoryMoviesService.getCategoryMovies(id).then((data)=>{
            setGetCategoryMovies(data)
        })
    },[])

  return (
    <>
      <NavBar/>
      <div className='categoryMoviesPosters'>
      {getCategoryMovies.map((movie)=>{
        return (
            <div className='posterList'>
                <img className='posterImg' src={movie.img}/>
                <h3 className='h3'>{movie.title}</h3>
            </div>
        )
      })}
        
      </div>
    </>
  )
}

export default CategoryMovies
