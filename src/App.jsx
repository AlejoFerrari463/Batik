import React from "react"
import NavBar from "./componentes/Navbar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CarritoProvider } from "./context/carritoContext"
import Cart from "./componentes/Cart/Cart"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./componentes/Checkout/Checkout"
import Error404 from "./componentes/Error404/Error404"





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
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<Error404/>}/>

          </Routes>
      

      
      </CarritoProvider>
      <ToastContainer/>
      </BrowserRouter>

     
    </>
  )
}

export default App
