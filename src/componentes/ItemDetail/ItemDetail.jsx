import React, { useState } from 'react'

import "./ItemDetail.css"
import "../Item/Item.css"
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'

const ItemDetail = ({id,nombre,imagen,precio,descripcion,stock}) => {

  const [agregarCantidad , setAgregarCantidad] = useState(0)


  const funcionAgregar = (cantidad) =>{


    setAgregarCantidad(cantidad)
    console.log("Productos: "+cantidad)


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


          agregarCantidad > 0 ? <button>Ir al carro</button> :  <Counter inicial={1} stock={stock} funcionAgregar={funcionAgregar} />


        }

       

      </div>
        
     



    </div>
   


  )
}

export default ItemDetail