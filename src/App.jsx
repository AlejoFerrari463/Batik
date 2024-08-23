import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer referencia="ESTE ES EL LIST ITEM CONTAINER" />
    </>
  )
}

export default App
