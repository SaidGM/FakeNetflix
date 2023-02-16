import React from 'react'
import { motion } from 'framer-motion';
import allCategoriesService from '../apiServices/allCategoryMoviesService';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Categories() {

  const [getAllCategories, setGetAllCategories] = useState([])

  useEffect(()=>{
    allCategoriesService.getAllCategories().then((data)=>{
      setGetAllCategories(data)
    })
  },[]);

  return (
    <motion.div className='sliderBox'>
      <h4 className='h4'>Categories</h4>
      <motion.div className='sliderCategories'>
        {getAllCategories.map((item)=>{
          return (
            <motion.div className='itemCategories'>
              <Link to={`/category-movies/${item.id}`}>
                <h5 className='categoryName'>{item.category}</h5>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Categories
