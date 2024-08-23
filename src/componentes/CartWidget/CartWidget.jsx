import React from 'react'

import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className='me-5' >
      <img className='ImagenCarrito' src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png" alt="CarritoCompras" />
      <strong className='CantidadEnCarrito' >4</strong>
    </div>
    
  )
}

export default CartWidget