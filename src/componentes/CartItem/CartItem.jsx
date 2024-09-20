import React from 'react'

import { carritoContext } from '../../context/carritoContext'
import { useContext } from 'react'

const CartItem = ({item,cantidad}) => {


    const {eliminarProductoDeCarrito} = useContext(carritoContext) 


  return (
    <div>

        <h2>{item.nombre}</h2>
        <h3>{item.precio}</h3>
        <h4>{cantidad}</h4>

        <button onClick={()=>eliminarProductoDeCarrito(item.id)} >BORRAR</button>


    </div>
  )
}

export default CartItem