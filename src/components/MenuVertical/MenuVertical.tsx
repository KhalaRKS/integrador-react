import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { carritoContext } from '../../context/CarritoContext';

interface MenuVerticalProps {
    className: string,
}


export function MenuVertical({className}: MenuVerticalProps) {
    const {cantidad} = useContext(carritoContext)
  return (
    <div className={className}>
        <div className='justify-around flex flex-col items-center gap-5 md:hidden'>
            <Link to="/" className='flex-1'>Home</Link>
            <Link to="about" className='flex-1'>About</Link>
            <Link to="item" className='flex-1'>Item</Link>
            <Link to="carrito" className='flex-1'>carrito {cantidad}</Link>
        </div>
    </div>
  )
}
