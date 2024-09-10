import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"





function App() {


  return (
    <>

      <BrowserRouter>
      
        <NavBar/>

          <Routes>

            <Route path="/"  element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>

          </Routes>
      
      
      </BrowserRouter>

     
    </>
  )
}

export default App
