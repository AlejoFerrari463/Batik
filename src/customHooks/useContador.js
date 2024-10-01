
import { useState } from "react"

export const useContador = (stock,inicial)=>{


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

    return {contador,sumarContador,restarContador}

}