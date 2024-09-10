import React from 'react'

import "./ItemDetailContainer.css"

import { useState,useEffect } from 'react'

import { obtenerUnProducto } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {


  const [producto, setProducto] = useState(null)

  const {idItem} = useParams()

  useEffect(()=>{

   
    obtenerUnProducto(idItem)
    .then((response)=>{setProducto(response)})
    .catch((error)=>{console.log(error)})

  },[idItem])

  return (

    <div className='contenedor-detail' >

    <ItemDetail {...producto} />


    </div>
  )
}

export default ItemDetailContainer