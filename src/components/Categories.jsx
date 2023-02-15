import React from 'react'
import { motion } from 'framer-motion';
import allCategoryMoviesService from '../apiServices/allCategoryMoviesService';
import { useEffect, useState } from "react";

// import jason from '../data/MoviesData'


function Categories() {

  const [getAllCategoryMovies, setGetAllCategoryMovies] = useState([])

  useEffect(()=>{
    allCategoryMoviesService.getAllCategoryMovies().then((data)=>{
      setGetAllCategoryMovies(data)
    })
  },[]);

  return (
    <motion.div className='sliderBox'>
      <h4 className='h4'>Categories</h4>
      <motion.div className='sliderCategories'>
        {getAllCategoryMovies.map((item)=>{
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
