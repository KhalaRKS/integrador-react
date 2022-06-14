import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import { Item } from './views/Item';
import { ProductsContext } from './context/ProductsContext';
import { CarritoContext } from './context/CarritoContext';
function App() {
  return (
    <BrowserRouter>
      <CarritoContext>
        <ProductsContext>
          <Navbar/>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path='/item/:category/:name' element={<Item />}/>
          </Routes>
        </ProductsContext>
      </CarritoContext>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
