import React from 'react'
import '../Styles/NavBar.css'
import {FaHome, FaStar} from "react-icons/fa";

function NavBar() {
  return (
    <nav>
        <ul id='menu'>
            <li id='home' className='icons'><FaHome/></li>
            <li id='favorite' className='icons'><FaStar/></li>
        </ul>
    </nav>
  )
}

export default NavBar
