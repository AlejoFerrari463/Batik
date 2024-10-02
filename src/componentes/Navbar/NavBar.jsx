import React, { useState } from 'react'

import "./NavBar.css"
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'




const NavBar = () => {

  const [fondo, setFondo] = useState("white")
  const [sombraNav, setSombraNav] = useState("black")

  const manejarToogler = (e)=>{

  
   
    if (e.target.checked == true){
      setFondo("black")
      
      document.body.style.backgroundColor = "black"
    }
    else {
      setFondo("white")
       document.body.style.backgroundColor = "white"
    }

  }


  return (

    <div className='container-fluid sticky-top' >

    <nav nav className="navbar  navbar-expand-lg" style={{backgroundColor: fondo, boxShadow: `2px 5px 5px ${sombraNav}`}}  >
    <div className="container-fluid">
    <Brand/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className='nav-links' style={{color: sombraNav}} to="/categoria/camperas" > Camperas </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-links' style={{color: sombraNav}} to="/categoria/remeras" > Remeras </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-links' style={{color: sombraNav}}  to="/categoria/zapatillas" > Zapatillas </Link>
            </li>
        </ul>
        </div>

        <div className="form-check form-switch">
          <input onChange={manejarToogler} className="form-check-input" type="checkbox" role="switch" />
        </div>

        <CartWidget/>
    </div>
    </nav>

    </div>

    
  )
}

export default NavBar