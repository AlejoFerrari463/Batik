import React from 'react'

import "./ItemDetail.css"
import "../Item/Item.css"

const ItemDetail = ({id,nombre,imagen,precio,descripcion}) => {
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

      </div>
        
     



    </div>
   


  )
}

export default ItemDetail