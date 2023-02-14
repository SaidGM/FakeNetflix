import React from 'react'
import AllMovies from '../components/AllMovies'
import Categories from '../components/Categories'
import Favorites from '../components/Favorites'
import NavBar from '../components/NavBar'

function PagePrincipal() {
  return (
    <>
      <NavBar />
      <AllMovies/>
      <Categories/>
      <Favorites/>
    </>
  )
}

export default PagePrincipal
