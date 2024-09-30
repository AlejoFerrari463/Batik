import React from 'react'

import { useState } from 'react'

import "./Counter.css"

const Counter = ({inicial,stock,funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = ()=>{


        if (contador<6 && contador<stock ){

            setContador(contador+1)

        }

       

    }

    const restarContador = ()=>{

        if(contador>inicial){
            setContador(contador-1)
        }

       

    }



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