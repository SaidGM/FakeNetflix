import React, { useState } from 'react'
import MoviesData from '../data/MoviesData.js'
import { Icon } from '@iconify/react';


function Article() {
    const [color, setColor] = useState(true)


    const Onchange = ()=> {
        setColor(!color)
    }

    const map = MoviesData.map((item)=> {
        return(
            <>
                <article className='article'>
                    <Icon icon="material-symbols:star-rate-rounded" 
                    className='iconStar' onClick={Onchange} 
                    color={color ? "white" : "yellow"}/>

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
