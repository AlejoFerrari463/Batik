import React from 'react'

import "./ItemDetail.css"

const ItemDetail = ({id,nombre,imagen}) => {
  return (
    

    id == null ? <h1>NO TENEMOS ESE PRODUCTO</h1> :
    <div className='card-detail' >

    

        <h3>{nombre}</h3>
        <img src={imagen} alt={nombre} />


    </div>


  )
}

export default ItemDetail