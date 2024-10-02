import React from 'react'

import "./ItemDetailContainer.css"

import { useState,useEffect } from 'react'


import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'

import { db } from '../../services/config'

const ItemDetailContainer = () => {


  const [producto, setProducto] = useState(null)

  const {idItem} = useParams()

  useEffect(()=>{

    const nuevoDoc = doc(db,"productos",idItem)

    getDoc(nuevoDoc)
    .then((res)=>{
      const data = res.data();
      const nuevoProcuto = {id: res.id,...data}
      setProducto(nuevoProcuto)
    })
    .catch((error)=>{console.log(error)})


  },[idItem])

 

  return (

    <div className='contenedor-detail' >

    <ItemDetail {...producto} />


    </div>
  )
}

export default ItemDetailContainer