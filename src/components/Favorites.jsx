import React from 'react'
import { motion } from 'framer-motion';

function Favorites() {
  return (
    <>
      <motion.div className='sliderBox'>
        <h4 className='h4'>Favorites</h4>
        {/* aqui un filter de los que isFavorite sea true */}
        <motion.div className='slider'>
          <motion.div className='item'>
            
          </motion.div>
          <motion.div className='item'>
            
          </motion.div>
        </motion.div>
      </motion.div>
      <div className='hiddenDiv'></div>
    </>
  )
}

export default Favorites
