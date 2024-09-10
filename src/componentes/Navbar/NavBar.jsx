import React from 'react'

import "./NavBar.css"
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-fondo">
    <div className="container-fluid">
    <Brand/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" > Home </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/categoria/camperas" > Camperas </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/categoria/remeras" > Remeras </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/categoria/zapatillas" > Zapatillas </Link>
            </li>
            
        </ul>
        </div>
        <CartWidget/>
    </div>
    </nav>
  )
}

export default NavBar