import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { carritoContext } from '../context/CarritoContext'

function Navbar() {
  const {cantidad} = useContext(carritoContext)
  return (   
    <nav className='container flex flex-row mx-auto'>
      <Link to="/" className='flex-1'>Home</Link>
      <Link to="about" className='flex-1'>About</Link>
      <Link to="item" className='flex-1'>Item</Link>
      <Link to="carrito" className='flex-1'>carrito {cantidad}</Link>
    </nav>
  )
}

export default Navbar