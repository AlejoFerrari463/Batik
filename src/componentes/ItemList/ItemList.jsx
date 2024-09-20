import React from 'react'
import Item from '../Item/Item'

import "./Itemlist.css"

const ItemList = ({produ}) => {
  return (
   
    <div className='contenedor-cards' >

      {
        
        produ.map((item)=>(


          
          <Item key={item.id} {...item} />
          
         
        ))


      }

    </div>


  )
}

export default ItemList