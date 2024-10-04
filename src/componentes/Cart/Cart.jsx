import React from 'react'

import { useContext } from 'react'
import { carritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

import "./Cart.css"



const Cart = () => {

    const {carrito, cantidad,total,vaciarCarrito} = useContext(carritoContext)

    if (cantidad == 0 ){


        return (

            <div className='text-center mt-4' >

                <h2>NO HAY PRODUCTOS. PORFAVOR COMPRE</h2>
                <Link to={"/"} ><button className='boton-cart' >VEA NUESTROS PRODUCTOS</button></Link>

             </div>


        )

       
    }


  return (

    <div className='text-center mt-4 mb-5'>
    
        <h2 className='mb-5 mt-5' >PRODUCTOS EN EL CARRO</h2>

        <div className='contenedor-productos-cart' >

        {

            carrito.map((prod)=>  <CartItem key={prod.item.id} {...prod} />  )

        }

        </div>

       

        <h3>Cantidad Total de productos: {cantidad}</h3>
        <h3>Total: ${total}</h3>
    
        <button className='boton-cart mb-4' onClick={()=>vaciarCarrito()} >VACIAR CARRITO</button>
        
        <br />

        <Link className='mt-5 link-cart'  to={"/checkout"} >FINALIZAR COMPRA</Link>
    
    </div>
    
  )


}

export default Cart