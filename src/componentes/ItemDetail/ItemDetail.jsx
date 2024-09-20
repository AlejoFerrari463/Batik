import React, { useState } from 'react'

import "./ItemDetail.css"
import "../Item/Item.css"
import Counter from '../Counter/Counter'

import { carritoContext } from '../../context/carritoContext'
import { useContext } from 'react'

const ItemDetail = ({id,nombre,imagen,precio,descripcion,stock}) => {

  const [agregarCantidad , setAgregarCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(carritoContext)

  const funcionAgregar = (cantidad) =>{


    setAgregarCantidad(cantidad)


    const item = {id,nombre,precio}
 
    agregarAlCarrito(item,cantidad)
    

  }


  return (
    

    id == null ? <h1>NO TENEMOS ESE PRODUCTO</h1> :

    <div>

      <div className='cards-detail' >


        <div className='cards-detail-mostrar' >

          <div className='cards-id' >{id}</div>
            
          <img src={imagen} alt={nombre} /> 
          <div className='cards-body' >
            <div>{nombre}</div>
            <div className='mt-3' >${precio}</div>
          </div>
          

        </div>

        <h3 className='text-center' >{descripcion}</h3>

        {

          stock < 3 ? <h5 className='text-center' >ULTIMAS {stock} UNIDADES </h5> : ""

        }

        {


          agregarCantidad > 0 ? <div className='contenedor-boton-carro' ><button className='boton-carro' >Ir al carro</button></div>  :  <Counter inicial={1} stock={stock} funcionAgregar={funcionAgregar} />


        }

       

      </div>
        
     



    </div>
   


  )
}

export default ItemDetail