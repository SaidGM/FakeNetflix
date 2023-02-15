import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import {FaPencilAlt,FaHeart, FaInfoCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import allMoviesService from '../apiServices/allMoviesServices';


function Favorites() {

  const [isFavorite, setIsFavorite] = useState([])

  useEffect(()=>{
    allMoviesService.getAllMovies().then((data)=>{
      setIsFavorite(data)
    })},[]);

  return (
    <>
      <motion.div className='sliderBox'>
        <h4 className='h4'>Favorite</h4>
        <motion.div className='slider' drag='x' dragConstraints={{ right: 0, left: -883 }}>
          { 
            isFavorite.map((item, key) => {
              return (
                <motion.div key={key.id} className='item' >
                  <FaHeart id="heart" className='iconMovies' color={item.isFavorite ? 'red' : 'white'} />
                  <FaPencilAlt id='pencil' className='iconMovies' />
                  <Link to={'/details'}>
                    <FaInfoCircle id='info' className='iconMovies' />
                  </Link>
                  <img src={item.img} alt="" />
                </motion.div>
              )})
          }
        </motion.div>
      </motion.div>
      <div className='hiddenDiv'></div>
    </>
  )
}

export default Favorites
