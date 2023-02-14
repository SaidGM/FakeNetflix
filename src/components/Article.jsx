import React, { useState } from 'react'
import MoviesData from '../data/MoviesData.js'
import { Icon } from '@iconify/react';


function Article() {
    // const [color, setColor] = useState(true)


 

    const map = MoviesData.map((item)=> {   
        return(
            <>
                <article className='article' key={item.id}>
                    <Icon icon="material-symbols:star-rate-rounded" 
                    id='iconStar' key={item.id}
                    color={item.isFavorite ? "yellow" :"white" }/>

                    <img src={item.img} alt=""  className='poster'/>
                    <Icon icon="mdi:lead-pencil" className='iconPencil'/>
                </article>
            </>
            
        )})
  return (
      map
  )
}

export default Article
