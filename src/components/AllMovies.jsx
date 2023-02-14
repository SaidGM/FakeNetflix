import React from 'react'
import { AiOutlineHeart, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import '../Styles/Slider.css'
import { motion } from 'framer-motion';


const url = "https://63ea1eb13363c87003620d7f.mockapi.io/movies"

function AllMovies() {

  const [post, setPost]= useState([])

  useEffect(()=>{
    axios.get(url).then((res)=>setPost(res.data))
  },[])
  console.log(post);

  return (
    <motion.div className='sliderBox'>
      <h4 className='h4'>All movies</h4>
      <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -1063}}>
        {
          post.map((item) => {
            return (
              <motion.div key={item.id} className='item' >
                <AiOutlineHeart className="heart" />
                <img src={item.img} alt="" className='moviePoster' />
              </motion.div>
            )
          })
        }
      </motion.div>
    </motion.div>
  )
}

export default AllMovies
