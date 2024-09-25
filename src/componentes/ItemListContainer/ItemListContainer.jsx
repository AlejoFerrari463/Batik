import React from 'react'

import { useState, useEffect } from 'react'

import { obtenerProductos, obtenerProductosCategoria } from '../../asynmock' 

import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const [loader, setLoader] = useState(false)

  const {idCategoria} = useParams()
  
  useEffect(()=>{
    setLoader(true)
    const obtenerInfo =  idCategoria ? obtenerProductosCategoria : obtenerProductos

    obtenerInfo(idCategoria)
    .then((response)=>setProductos(response))
    .catch((error)=>console.log(error))
    .finally(()=>setLoader(false))


  },[idCategoria])
  
  return (

    <div className='container-fluid' >

      {/* <Loader/> */}

      <h1 className='text-center mt-5 mb-5' >MIS PRODUCTOS</h1>
      
      {loader ? <Loader/> :  <ItemList produ={productos} />}
      
      
      
    </div>

  )
}

export default ItemListContainer