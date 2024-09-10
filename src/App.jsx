import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Zapatillas from "./componentes/Zapatillas/Zapatillas"
import Home from "./componentes/Home/Home"
import Remeras from "./componentes/Remeras/Remeras"
import Camperas from "./componentes/Camperas/Camperas"




function App() {


  return (
    <>

      <BrowserRouter>
      
        <NavBar/>

          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/zapatillas" element={<Zapatillas/>} />
            <Route path="/remeras" element={<Remeras/>} />
            <Route path="/camperas" element={<Camperas/>} />

            


          </Routes>
      
      
      </BrowserRouter>

     
    </>
  )
}

export default App
