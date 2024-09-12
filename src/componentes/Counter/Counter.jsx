import React from 'react'

import { useState,useEffect } from 'react'


const Counter = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = ()=>{


        if (contador<stock){

            setContador(contador+1)

        }

       

    }

    const restarContador = ()=>{

        if(contador>inicial){
            setContador(contador-1)
        }

       

    }



  return (


    <div>

        <button onClick={sumarContador} >+</button>
        <div>{contador}</div>
        <button onClick={restarContador} >-</button>


        <button onClick={()=>funcionAgregar(contador)} >Aceptar</button>


    </div>


    
  )
}

export default Counter