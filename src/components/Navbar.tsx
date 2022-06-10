import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (   
    <nav className='md:container flex flex-row mx-auto'>
      <Link to="/" className='flex-1'>Home</Link>
      <Link to="about" className='flex-1'>About</Link>
      <Link to="item" className='flex-1'>Item</Link>
    </nav>
  )
}

export default Navbar