import React from 'react'
import Item from '../Item/Item'

import "./Itemlist.css"

const ItemList = ({productos}) => {
  return (
   
    <div className='contenedor-cards' >

      {
        
        productos.map((item)=>(


          
          <Item key={item.id} {...item} />
          
         
        ))


      }

    </div>


  )
}

export default ItemList