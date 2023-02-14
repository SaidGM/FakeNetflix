import React from 'react'
// import axios from "axios";
// import { useEffect, useState } from "react";
import '../Styles/Slider.css'
import { motion } from 'framer-motion';
import jason from '../data/MoviesData'
import {FaPencilAlt,FaHeart, FaInfoCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';


// const url = "https://63ea1eb13363c87003620d7f.mockapi.io/movies"

function AllMovies() {

  // const [post, setPost]= useState([])

  // useEffect(()=>{
  //   axios.get(url).then((res)=>setPost(res.data))
  // },[])
  // console.log(post);

  return (
    <motion.div className='sliderBox'>
      <h4 className='h4'>All movies</h4>
      <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -1063}}>
        {
          jason.map((item) => {
            return (
              <motion.div key={item.id} className='item' >
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
  )
}

export default AllMovies
