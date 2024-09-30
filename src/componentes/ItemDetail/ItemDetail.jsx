import React, { useState } from 'react'

import "./ItemDetail.css"
import "../Item/Item.css"
import Counter from '../Counter/Counter'

import { carritoContext } from '../../context/carritoContext'
import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { Bounce, toast, Zoom } from 'react-toastify';
import { Loader } from '../Loader/Loader'

const ItemDetail = ({id,nombre,imagen,precio,descripcion,stock}) => {

  const [agregarCantidad , setAgregarCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(carritoContext)

  const funcionAgregar = (cantidad) =>{


    setAgregarCantidad(cantidad)


    const item = {id,nombre,precio,imagen}
 
    agregarAlCarrito(item,cantidad)

    toast.success('Producto agregado con exito!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
     
      });
    

  }


  return (
    

    id == null ? <Loader/> :

    <div>

      <div className='cards-detail' >


        <div className='cards-detail-mostrar' >
            
          <img src={imagen} alt={nombre} /> 
          <div className='cards-body' >
            <div>{nombre}</div>
            <div className='mt-3' >${precio}</div>
          </div>
          

        </div>

        <h3 className='text-center' >{descripcion}</h3>

       

        {stock<3 && <h5 className='text-center' >ULTIMAS {stock} UNIDADES </h5>}

        {


          agregarCantidad > 0 ? <div className='contenedor-boton-carro' ><Link to={"/cart"}  className='boton-carro' >Ir al carro</Link></div>  :  <Counter inicial={1} stock={stock} funcionAgregar={funcionAgregar} />


        }

       

      </div>
        
     



    </div>
   


  )
}

export default ItemDetail