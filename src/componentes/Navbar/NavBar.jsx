import React, { useState } from 'react'

import "./NavBar.css"
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'




const NavBar = () => {

  const [fondo, setFondo] = useState("black")

  const manejarToogler = (e)=>{


   
    if (e.target.checked == true){
      setFondo("white")
      console.log(fondo)
    }
    else {
      setFondo("black")
      console.log(fondo)
    }

  }


  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: fondo}} >
    <div className="container-fluid">
    <Brand/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className='nav-links' to="/categoria/camperas" > Camperas </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-links' to="/categoria/remeras" > Remeras </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-links' style={{color: "red"}}  to="/categoria/zapatillas" > Zapatillas </Link>
            </li>
        </ul>
        </div>

        <div className="form-check form-switch">
          <input onChange={manejarToogler} class="form-check-input" type="checkbox" role="switch" />
        </div>

        <CartWidget/>
    </div>
    </nav>
  )
}

export default NavBar