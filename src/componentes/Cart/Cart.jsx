import React from 'react'

import { useContext } from 'react'
import { carritoContext } from '../../context/carritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'





const Cart = () => {

    const {carrito, cantidad,total,vaciarCarrito} = useContext(carritoContext)

    if (cantidad == 0 ){


        return (

            <div className='text-center mt-4' >

                <h2>NO HAY PRODUCTOS. PORFAVOR COMPRE</h2>
                <Link to={"/"} ><button>VEA NUESTROS PRODUCTOS</button></Link>

             </div>


        )

       
    }


  return (

    <div className='text-center mt-4'>
    
        <h2>PRODUCTOS EN EL CARRO</h2>

        {

            carrito.map((prod)=>  <CartItem key={prod.item.id} {...prod} />  )

        }

        <h3>Cantidad Total de productos: {cantidad}</h3>
        <h3>Total: ${total}</h3>
    
        <button onClick={()=>vaciarCarrito()} >VACIAR CARRITO</button>
        
        <br />

        <Link to={"/checkout"} >FINALIZAR COMPRA</Link>
    
    </div>
    
  )


}

export default Cart