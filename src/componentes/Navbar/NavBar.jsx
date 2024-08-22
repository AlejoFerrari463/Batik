import React from 'react'

import "./NavBar.css"
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-fondo">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <Brand/>
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Remeras</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Pantalones</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Zapatillas</a>
            </li>
        </ul>
        <CartWidget/>
        </div>
    </div>
    </nav>
  )
}

export default NavBar