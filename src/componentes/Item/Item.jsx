import React from 'react'

import "./Item.css"

const Item = ({id,nombre,precio,imagen}) => {
  return (
    <div className='cards' >

      <div className='cards-id' >{id}</div>
      <img src={imagen} alt="" />
      <h3>{nombre}</h3>
      <p>${precio}</p>

      <button className='mt-3 cards-button' >VER DETALLE</button>

    </div>
  )
}

export default Item