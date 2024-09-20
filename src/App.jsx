import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CarritoProvider } from "./context/carritoContext"







function App() {


  return (
    <>

      <BrowserRouter>
      <CarritoProvider>


        <NavBar/>

          <Routes>

            <Route path="/"  element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>

          </Routes>
      

      
      </CarritoProvider>
      </BrowserRouter>

     
    </>
  )
}

export default App
