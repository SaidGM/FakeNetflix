import React from 'react'
import { motion } from 'framer-motion';
import allMoviesService from '../apiServices/allMoviesService';
import { useEffect, useState } from "react";

// import jason from '../data/MoviesData'


function Categories() {

  const [getAllMovies, setGetAllMovies] = useState([])
  useEffect(()=>{
    allMoviesService.getAllMovies().then((data)=>{
      setGetAllMovies(data)
    })
  },[])

  return (
    <motion.div className='sliderBox'>
      <h4 className='h4'>Categories</h4>
      <motion.div className='sliderCategories'>
        {getAllMovies.map((item)=>{
          return (
            <motion.div className='itemCategories'>
              <h5>{item.category}</h5>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Categories
