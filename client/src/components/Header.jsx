

import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../images/logo.jpeg';
// import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />

          </Link>
          <ul className='nav_menu'>
          <li><Link to="/profile">Ernest Achiever</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          


          </ul>
          <buttton className="nav__toggle-btn">
            <AiOutlineClose />

          </buttton>
      </div>
    </nav>
  )
}

export default Header
