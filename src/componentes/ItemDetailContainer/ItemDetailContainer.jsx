import React from 'react'

import "./ItemDetailContainer.css"

import { useState,useEffect } from 'react'

import { obtenerUnProducto } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


  const [producto, setProducto] = useState(null)

  useEffect(()=>{

    obtenerUnProducto(3)
    .then((response)=>{setProducto(response)})
    .catch((error)=>{console.log(error)})

  },[])

  return (

    <div className='contenedor-detail' >

    <ItemDetail {...producto} />


    </div>
  )
}

export default ItemDetailContainer