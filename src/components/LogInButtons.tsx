import React from 'react'
import { Link } from 'react-router-dom'

export default function LogInButtons() {
  return (
    <div className='flex h-10 gap-1 items-center'>
        <Link className='text-center p-2 transition-all bg-blue-500 hover:bg-blue-700 text-white font-light rounded ' to={'login'}>
            Iniciar sesión
        </Link >
        <Link className='text-center p-1.5 transition-all border-2 border-blue-500 text-blue-500 hover:bg-blue-500  hover:text-white font-light  rounded ' to={'/login'}>
            Registrarse
        </Link >
    </div>
  )
}
