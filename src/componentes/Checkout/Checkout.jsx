import React, { useState } from 'react'


import { carritoContext } from '../../context/carritoContext'
import { useContext } from 'react'

import { addDoc, collection, doc, getDoc, updateDoc} from 'firebase/firestore'

import { db } from '../../services/config'

import "./Checkout.css"
import ItemList from '../ItemList/ItemList'
import { Navigate } from 'react-router-dom'


const Checkout = () => {

  const {carrito,total,vaciarCarritoSinAlert} = useContext(carritoContext)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")
  const [esperandoOrden, setEsperandoOrden] = useState("")


  const manejadorFormulario = (e)=>{
    e.preventDefault()

    if (!nombre || !apellido || !email  || !emailConfirmacion || !telefono){

      setError("COMPLETE TODOS LOS CAMPOS")
      return;

      

    } 
    else {

      if (email!=emailConfirmacion){
        setError("LOS MAILS NO COINCIDEN")
        return;

      }
     

      else {

        setEsperandoOrden("Procesando pago..")

        const orden = {

          

          items: carrito.map((prod)=>{

            return {

              id: prod.item.id,
              nombre: prod.item.nombre,
              cantidad: prod.cantidad

            }


          }),
          nombre: nombre,
          apellido: apellido,
          email: email,
          telefono: telefono,
          fecha: new Date()


        } 

        Promise.all(

          orden.items.map(async (prod)=>{

            const productoReferencia = doc(db,"productos",prod.id)

            const productoDocumento = await getDoc(productoReferencia)

            const stockActual = productoDocumento.data().stock

            await updateDoc(productoReferencia,{

              stock: stockActual - prod.cantidad

            })

          })


        )
        .then(()=>{
          

        addDoc(collection(db,"ordenes"),orden)
          .then((docRef)=>{

            setOrdenId(docRef.id)
            vaciarCarritoSinAlert()
            setNombre("")
            setApellido("")
            setEmail("")
            setError("")
            setTelefono("")
            setEmailConfirmacion("")
           
          })
          .catch((error)=>{
            console.log(error)
          })

        })
        .catch((error)=>{
          console.log(error)
        })


        

       


      }


    }



  }

 


  return (

    

    <div className='contenedor-checkout' >


      {carrito.map((prod)=>{

      

            return( 
                <div className='text-center mt-4' key={prod.item.id} >

                    <h2>{prod.item.nombre}</h2>
                    <h3>{prod.cantidad} * ${prod.item.precio}</h3>

                    

                </div>
           
        
            )
       

      })}

        <h4 className='mt-3 mb-5' >TOTAL: ${total}</h4>

        <form className='contenedor-formulario ' onSubmit={manejadorFormulario} >

        <label htmlFor="nombre">Nombre</label>
        <input type="text" id='nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre} />
        <br />
        

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id='apellido'  onChange={(e)=>setApellido(e.target.value)} value={apellido} />
        <br />

        <label htmlFor="telefono">Telefono</label>
        <input type="text" id='telefono'  onChange={(e)=>setTelefono(e.target.value)} value={telefono} />
        <br />


        <label htmlFor="email">Email</label>
        <input type="email" id='email'  onChange={(e)=>setEmail(e.target.value)} value={email} />
        <br />

        <label htmlFor="emailConfir">Confirme su email</label>
        <input type="email" id='emailConfir'  onChange={(e)=>setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
        <br />

     
        {error && <p> {error} </p>}

        <button className='boton-comprar' type='sumbit' >COMPRAR</button>

        </form>

        {ordenId ? <h2 className='mt-2' >FELICIADES! TU ORDEN DE COMPRA ES: {ordenId}</h2> :<h2>{esperandoOrden}</h2> }
       
       

       

    </div>
  )
}

export default Checkout