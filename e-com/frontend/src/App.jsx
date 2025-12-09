import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}></Route>
        <Route path = '/men' element = {<ShopCategory category = 'men'/>}></Route>
        <Route path = '/women' element = {<ShopCategory category = 'women'/>}></Route>
        <Route path = '/kids' element = {<ShopCategory category = 'kids'/>}></Route>
        <Route path = '/kids' element = {<ShopCategory category = 'kids'/>}></Route>
        <Route path = '/product' element = {<Product/>}>
          <Route path = ':productId' element = {<Product/>}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App
