import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";


const url = "https://63ea1eb13363c87003620d7f.mockapi.io/movies"

function AllMovies() {

  const [post, setPost]= useState([])

  useEffect(()=>{
    axios.get(url).then((res)=>setPost(res.data))
  },[])
  console.log(post);

  return (
    <section className='section'>
      <h4 className='h4'>All movies</h4>
      <div className='carrousel'>
        {
          post.map((item) => {
            return (
              <article key={item.id} className='article' >
                <AiOutlineHeart className="heart" />
                <img src={item.img} alt="" className='moviePoster' />
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default AllMovies
