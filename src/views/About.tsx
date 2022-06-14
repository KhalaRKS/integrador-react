import React, { useEffect } from 'react'
import { useContext } from 'react'
import { carritoContext } from '../context/CarritoContext'
import { productsContext } from '../context/ProductsContext';
function About() {
  const {carrito, total} = useContext(carritoContext)

  const {productos} = useContext(productsContext);
  
  useEffect(() => {
    console.log(productos);
  }
  , [productos])
  return (
    <div>About</div>
  )
}

export default About