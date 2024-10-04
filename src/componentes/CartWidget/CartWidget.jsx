import React from 'react'

import "./CartWidget.css"

import { carritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {cantidad} = useContext(carritoContext)


  return (
    <div className='me-5' >
      <Link to={"/cart"} >
      <img className='ImagenCarrito' src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png" alt="CarritoCompras" />
      </Link>
      <span className='CantidadEnCarrito' >{cantidad}</span>
    </div>
    
  )
}

export default CartWidget