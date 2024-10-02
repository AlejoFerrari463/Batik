import React from 'react'

import { useState, useEffect } from 'react'



import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader'

import { db } from '../../services/config'
import { collection,getDocs,query,where } from 'firebase/firestore'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const [loader, setLoader] = useState(false)

  const {idCategoria} = useParams()
  
  useEffect(()=>{
    setLoader(true)
    const obtenerInfo =  idCategoria ? query(collection(db,"productos"), where ("categoria","==",idCategoria)): collection(db,"productos")


    getDocs(obtenerInfo)
    .then( res => {
      
      const filtrarProductos = res.docs.map(doc => {
        const data = doc.data();
        return {id: doc.id,...data}

       

      })

      setProductos(filtrarProductos)


    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>setLoader(false))



  },[idCategoria])
  
  return (

    <div className='container-fluid' >


      {idCategoria ? <h1 className='text-center mt-5 mb-5' >{idCategoria.toUpperCase()}</h1> : <h1 className='text-center mt-5 mb-5' >TODOS LOS PRODUCTOS</h1>}      
      {loader ? <Loader/> :  <ItemList produ={productos} />}
      

      
      
    </div>

  )
}

export default ItemListContainer