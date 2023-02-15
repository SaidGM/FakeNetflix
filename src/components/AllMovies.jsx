import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import {FaPencilAlt,FaHeart, FaInfoCircle} from 'react-icons/fa'
import '../Styles/Slider.css'
import allMoviesService from '../apiServices/allMoviesService';


function AllMovies() {

  const [getAllMovies, setGetAllMovies] = useState([])
  useEffect(()=>{
    allMoviesService.getAllMovies().then((data)=>{
      setGetAllMovies(data[4].movies)
    })
  },[])


  return (
    <>
      {console.log(getAllMovies)}

      <motion.div className='sliderBox'>
        <h4 className='h4'>All movies</h4>
        <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -1063}}>
          {
            getAllMovies.map((item, key) => {
              return (
                <motion.div key={key} className='item' >
                  <FaHeart id="heart"  className='iconMovies' color={item.isFavorite ? 'red' : 'white'}/>
                  <FaPencilAlt id='pencil' className='iconMovies'/>
                  <Link to={'/details'}>
                    <FaInfoCircle id='info' className='iconMovies'/>
                  </Link>
                    <img src={item.img} alt="" />
                </motion.div>
              )
            
            })
          }
        </motion.div>
      </motion.div>
    </>
  )
}

export default AllMovies
