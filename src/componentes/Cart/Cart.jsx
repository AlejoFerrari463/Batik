import React from 'react'

import { useContext } from 'react'
import { carritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'





const Cart = () => {

    const {carrito, cantidad,total,vaciarCarrito} = useContext(carritoContext)

    if (cantidad == 0 ){


        return (

            <div>

                <h2>NO HAY PRODUCTOS. PORFAVOR COMPRE</h2>
                <Link to={"/"} >VEA NUESTROS PRODUCTOS</Link>

             </div>


        )

       
    }


  return (

    <>
    
        <h2>PRODUCTOS EN EL CARRO</h2>

        {

            carrito.map((prod)=>  <CartItem key={prod.item.id} {...prod} />  )

        }

        <h3>Cantidad Total de productos: {cantidad}</h3>
        <h3>Total: {total}</h3>
    
        <button onClick={()=>vaciarCarrito()} >VACIAR CARRITO</button>
    
    
    </>
    
  )


}

export default Cart