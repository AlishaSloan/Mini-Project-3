import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='navbar-left'>
      <span className='navbar-bigger'>Random Meal Generator</span>
    </div>
    <div className='navbar-right'>
       <Link to="/login" className='navbar-link'>Login</Link>
      <Link to="/meals" className='navbar-link'>Meal Generator</Link>
      <Link to="Recipes" className='navbar-link'>Recipes</Link>
    </div>
    </nav>
  )
}

export default Navbar