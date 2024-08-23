import React from 'react'

import "./ItemListContainer.css"

const ItemListContainer = ({referencia}) => {
  return (

    <div className='contenedor-cards' >
        {referencia}
    </div>

  )
}

export default ItemListContainer