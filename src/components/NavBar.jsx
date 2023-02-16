import React from 'react'
import '../Styles/NavBar.css'
import {FaHome, FaStar, FaHotjar} from "react-icons/fa";
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

            <li id='popular' className='icons'><FaHotjar/></li>
            <li id='favorite' className='icons'><FaStar/></li>


            <Link to='/'>
              <li className='menuList'>Home</li>
            </Link>
            <li className='menuList'>Favorites</li>
            <li className='menuList'>Popular</li>
            <li className='menuList'>Dowload</li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar
