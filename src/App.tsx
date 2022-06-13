import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import { Item } from './views/Item';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>

      <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path='/item/:category/:name' element={<Item />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
