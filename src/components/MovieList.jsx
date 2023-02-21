import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {FaPencilAlt,FaHeart, FaInfoCircle, FaTimes} from 'react-icons/fa'
import '../Styles/Slider.css'

function AllMovies({movies, handleFavoriteClick, handleDelete}) {
  
  function show() {
    document.querySelector(".editForm").style.display = "block";
  }

  return (
    <>
      <motion.div className='sliderBox'>
        <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -883}}>
          {
            movies.map((item) => {
              return (
                <motion.div key={item.id} className='item' >
                  <FaTimes id="delete"  className='iconMovies'
                  onClick={()=>{
                    handleDelete(item.id)}
              
                  }
                  />
                  <FaHeart id="heart" className='iconMovies' color={item.isFavorite ? 'red' : 'white'} 
                    onClick={()=>{
                      handleFavoriteClick(item)
                      }} 
                  />
                  <FaPencilAlt id='pencil' className='iconMovies' onClick={show}/>
                  <Link to={`/details/${item.id}`}>
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
