import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import { Item } from './views/Item';
import { ProductsContext } from './context/ProductsContext';
import { CarritoContext } from './context/CarritoContext';
import { Carrito } from './views/Carrito';
import { Toaster } from 'react-hot-toast';
import { Login } from './views/Login';
function App() {
  
  return (
    <BrowserRouter>
    <div className='flex flex-col justify-between h-screen'>
      <CarritoContext>
        <ProductsContext>
          <div className='mb-14'>
          <Navbar/>
          </div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/carrito" element={<Carrito />}/>
              <Route path={'/register'} element={<Login />}/>
              <Route path="/login" element={<Login />}/>
              <Route path='/item/:category/:id' element={<Item />}/>
          </Routes>
        </ProductsContext>
      </CarritoContext>
      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
