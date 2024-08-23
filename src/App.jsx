import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer referencia="ESTE ES EL ITEM LIST CONTAINER" />
    </>
  )
}

export default App
