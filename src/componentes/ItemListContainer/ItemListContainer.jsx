import React from 'react'

import { useState, useEffect } from 'react'

import { obtenerProductos, obtenerProductosCategoria } from '../../asynmock' 

import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()
  
  useEffect(()=>{

    const obtenerInfo =  idCategoria ? obtenerProductosCategoria : obtenerProductos

    obtenerInfo(idCategoria)
    .then((response)=>setProductos(response))
    .catch((error)=>console.log(error))


  },[idCategoria])
  
  return (

    <div className='container-fluid' >

      <h1 className='text-center mt-5 mb-5' >MIS PRODUCTOS</h1>
      <ItemList productos={productos} />
      
    </div>

  )
}

export default ItemListContainer