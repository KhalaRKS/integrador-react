import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { carritoContext } from '../../context/CarritoContext';
import {CartIcon} from '../../assets/images/vectores/CartIcon';
import LogInButtons from '../LogInButtons';

interface MenuVerticalProps {
    className: string,
    showMenuOptions: boolean,
}


export function MenuVertical({className, showMenuOptions}: MenuVerticalProps) {
  return (
    <div className={className}>
        <div className='justify-around flex flex-col items-center gap-5 md:hidden'>
            <Link to="/" className={showMenuOptions ? 'flex-1 transition-all duration-500 opacity-1' : 'flex-1 transition-all duration-500 opacity-0'}>Home</Link>
            <Link to="about" className={showMenuOptions ? 'flex-1 transition-all duration-300 opacity-1' : 'flex-1 transition-all duration-500 opacity-0'}>About</Link>
            <Link to="item" className={showMenuOptions ? 'flex-1 transition-all duration-200 opacity-1' : 'flex-1 transition-all duration-500 opacity-0'}>Item</Link>
            <Link to="carrito" className={showMenuOptions ? 'flex-1 transition-all duration-100 opacity-1' : 'flex-1 transition-all duration-500 opacity-0'}><CartIcon/></Link>
            <LogInButtons/>
        </div>
    </div>
  )
}
// keyframes: {
//     hidden: {
//       '0%, 99%': { opacity: '0.9' },
//       '100%': { display: 'hidden', opacity: '0' },
//     },
//     animation: 'hidden 0.3s ease-in'
//   }