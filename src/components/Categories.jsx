import React from 'react'
import { motion } from 'framer-motion';
import jason from '../data/MoviesData'


function Categories() {
  return (
    <motion.div className='sliderBox'>
      <h4 className='h4'>Categories</h4>
      <motion.div className='sliderCategories'>
        {jason.map((item)=>{
          return (
            <motion.div className='itemCategories'>
              <h5>{item.categorie}</h5>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Categories
