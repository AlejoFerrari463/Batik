import React from "react";

import { useState, createContext } from "react";


export const carritoContext = createContext({

    carrito: [],
    cantidad: 0,
    total:0


})


export const CarritoProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    console.log(carrito)
    console.log(cantidad)
    console.log(total)

    const agregarAlCarrito = (item,cantidad) =>{

        const productoExiste = carrito.find((prod) =>prod.item.id == item.id )

        if(!productoExiste){

            setCarrito(prev => [...prev,{item,cantidad}])
            setCantidad(prev => prev + cantidad)
            setTotal(prev => prev + (cantidad * item.precio))

        }
        else {

            const actualizarCarrito = carrito.map((prod)=>{

                if (prod.item.id === item.id){

                    return {...prod, cantidad: prod.cantidad + cantidad}

                }
                else {
                    return prod
                }


            })

            setCarrito(actualizarCarrito)
            setCantidad(prev => prev + cantidad)
            setTotal(prev => prev + (cantidad * item.precio))

        }


    }

    const eliminarProductoDeCarrito = (id)=>{

        const productoExiste = carrito.find(prod => prod.item.id == id)
        const filtrarProducto = carrito.filter(prod => prod.item.id != id)

        setCarrito(filtrarProducto)
        setCantidad(prev => prev - productoExiste.cantidad)
        setTotal(prev => prev - (productoExiste.cantidad * productoExiste.item.precio))


    }


    return (

        <carritoContext.Provider  value={{carrito,cantidad,total,agregarAlCarrito}} >
            {children}
        </carritoContext.Provider>


    )
   

}

