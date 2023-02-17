import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import allMoviesService from '../apiServices/allMoviesServices';

function FavMovies() {

    const [favPage, setFavPage] = useState([])
    
    useEffect(()=>{
        allMoviesService.getIsFavorite().then((data)=>{
          setFavPage(data)
    })},[]);

  return (
    <>
      <NavBar/>
          <div className='categoryMoviesPosters'>
              {favPage.map((item)=>{
                return(
                    <div className='posterList'>
                        <img className='posterImg' src={item.img} alt=''/>
                        <h3 className='h3'>{item.title}</h3> 
                    </div> 
                )
              })
              }
          </div>
    </>
  )
}

export default FavMovies
