import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CarritoProvider } from "./context/carritoContext"
import Cart from "./componentes/Cart/Cart"







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
            <Route path="/cart" element={<Cart/>}/>

          </Routes>
      

      
      </CarritoProvider>
      </BrowserRouter>

     
    </>
  )
}

export default App
