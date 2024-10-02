import React from 'react'


import "./Counter.css"

import { useContador } from '../../customHooks/useContador'

const Counter = ({inicial,stock,funcionAgregar}) => {


    const {contador, sumarContador, restarContador} = useContador(stock,inicial)



  return (


    <div className='contenedor-counter' >

        <div className='counter' >


        <button className='me-2 boton-contador' onClick={sumarContador} >+</button>
        <div>{contador}</div>
        <button className='ms-2 boton-contador' onClick={restarContador} >-</button>


        </div>


        <button className='boton-aceptar' onClick={()=>funcionAgregar(contador)} >Aceptar</button>



    </div>


   
    
  )
}

export default Counter