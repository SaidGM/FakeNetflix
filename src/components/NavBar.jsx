import React from 'react'
import '../Styles/NavBar.css'
import {FaHome, FaStar} from "react-icons/fa";
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <img id='logo' src={Logo} alt=''/>
    <nav>
        <ul id='menu'>
            <Link to='/'>
              <li id='home' className='icons'><FaHome/></li>
            </Link>
            <li id='favorite' className='icons'><FaStar/></li>
            <Link to='/'>
              <li className='menuList'>Home</li>
            </Link>
            <li className='menuList'>Favorites</li>
            
        </ul>
    </nav>
    </>
  )
}

export default NavBar
