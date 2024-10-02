import React from 'react'
import Item from '../Item/Item'

import "./Itemlist.css"

const ItemList = ({produ}) => {
  return (
   
    <div className='contenedor-cards' >

      {
        
        produ.map((item)=>(


          item.stock > 0 &&   <Item key={item.id} {...item} />
          

          
         
        ))


      }

    </div>


  )
}

export default ItemList