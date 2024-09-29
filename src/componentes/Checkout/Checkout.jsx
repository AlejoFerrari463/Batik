import React, { useState } from 'react'


import { carritoContext } from '../../context/carritoContext'
import { useContext } from 'react'



const Checkout = () => {

  const {carrito, cantidad,total,vaciarCarrito} = useContext(carritoContext)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")

  const manejadorFormulario = (e)=>{
    e.preventDefault()

    if (!nombre || !apellido || !email  || !emailConfirmacion){

      setError("COMPLETE TODOS LOS CAMPOS")
      return;

      

    } 
    else {

      if (email!=emailConfirmacion){
        setError("LOS MAILS NO COINCIDEN")
        return;

      }
     

      else {

        console.log("amda")


      }


    }



  }



  return (
    <div>


      {carrito.map((prod)=>{

      

            return( 
                <div key={prod.item.id} >

                    <h1>{prod.item.nombre}</h1>
                    <h2>{prod.cantidad} * ${prod.item.precio}</h2>

                    

                </div>
           
        
            )
       

      })}

        <h5>TOTAL: ${total}</h5>

        <form onSubmit={manejadorFormulario} >

        <label htmlFor="nombre">Nombre: </label>
        <input type="text" id='nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre} />
        <br />
        

        <label htmlFor="apellido">Apellido: </label>
        <input type="text" id='apellido'  onChange={(e)=>setApellido(e.target.value)} value={apellido} />
        <br />

        <label htmlFor="email">Email: </label>
        <input type="email" id='email'  onChange={(e)=>setEmail(e.target.value)} value={email} />
        <br />

        <label htmlFor="emailConfir">Confirme su email: </label>
        <input type="email" id='emailConfir'  onChange={(e)=>setEmailConfirmacion(e.target.value)} value={emailConfirmacion} />
        <br />

        {error && <p> {error} </p>}

        <button type='sumbit' >COMPRAR</button>

        </form>

       

       

    </div>
  )
}

export default Checkout