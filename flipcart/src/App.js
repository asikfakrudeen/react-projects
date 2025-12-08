import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar/NavBar'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/products' element = {<Products/>}/>
        <Route path = '/productdetails/:id' element = {<ProductDetails/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App