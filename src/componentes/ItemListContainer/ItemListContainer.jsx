import React from 'react'

import { useState, useEffect } from 'react'

import { obtenerProductos } from '../../asynmock' 

import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  
  useEffect(()=>{

      obtenerProductos()
      .then((response)=>setProductos(response))
      .catch((error)=>console.log(error))


  },[])
  
  return (

    <div className='container-fluid' >

      <h1 className='text-center mt-5 mb-5' >MIS PRODUCTOS</h1>
      <ItemList productos={productos} />
      
    </div>

  )
}

export default ItemListContainer