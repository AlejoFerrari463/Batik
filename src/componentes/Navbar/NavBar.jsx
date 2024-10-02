import React from 'react'

import "./NavBar.css"
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'




const NavBar = () => {




  return (

    <div className='container-fluid sticky-top' >

    <nav className="navbar navbar-expand-lg"   >
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
            <Link className='nav-links'  to="/categoria/remeras" > Remeras </Link>
            </li>
            <li className="nav-item">
            <Link className='nav-links'   to="/categoria/zapatillas" > Zapatillas </Link>
            </li>
        </ul>
        </div>

      

        <CartWidget/>
    </div>
    </nav>

    </div>

    
  )
}

export default NavBar