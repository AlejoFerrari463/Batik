import React from 'react'

import { useContext } from 'react'
import { carritoContext } from '../../context/carritoContext'

const {carrrito, cantidad,total} = useContext(carritoContext)


const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart