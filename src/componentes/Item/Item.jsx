import React from 'react'

import { Link } from 'react-router-dom'

import "./Item.css"

const Item = ({id,nombre,precio,imagen}) => {
  return (
    <div className='cards' >

      <div className='cards-id' >{id}</div>
      <img src={imagen} alt={nombre} /> 
      <div className='cards-body' >
        <div>{nombre}</div>
        <div className='mt-3' >${precio}</div>
      </div>
   

    <Link to={`/item/${id}`} className='mt-4 cards-button' >VER DETALLE</Link>

    </div>
  )
}

export default Item