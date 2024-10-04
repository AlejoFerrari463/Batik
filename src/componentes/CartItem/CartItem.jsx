import React from 'react'

import { carritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

import "./CartItem.css"

const CartItem = ({item,cantidad}) => {


    const {eliminarProductoDeCarrito} = useContext(carritoContext) 


  return (
    <div className='mb-5 productos-cart' >

        <h3>{item.nombre}</h3>
        <h3>${item.precio}</h3>
        <h4>Unidades: {cantidad}</h4>
        <img className='imagen-carrito' src={item.imagen} alt={item.nombre} /> 
        <br />
        <i onClick={()=>eliminarProductoDeCarrito(item.id)} className="fa-solid fa-trash-can fa-xl"></i>
     


    </div>
  )
}

export default CartItem