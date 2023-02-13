import React from 'react'
import '../Styles/NavBar.css'
import {FaHome, FaStar} from "react-icons/fa";
import Logo from '../img/logo.png'

function NavBar() {
  return (
    <>
    <img id='logo' src={Logo}/>
    <nav>
        <ul id='menu'>
            <li id='home' className='icons'><FaHome/></li>
            <li id='favorite' className='icons'><FaStar/></li>
            <li className='menuList'>Home</li>
            <li className='menuList'>Favorites</li>
            
        </ul>
    </nav>
    </>
  )
}

export default NavBar