import React from 'react'

export default function LogInButtons() {
  return (
    <div className='flex h-10 gap-1'>
        <button className='transition-all bg-blue-500 hover:bg-blue-700 text-white font-light px-1 rounded '>
            Iniciar sesión
        </button>
        <button className='transition-all border-2 border-blue-500 text-blue-500 hover:bg-blue-500  hover:text-white font-light px-1  rounded '>
            Registrarse
        </button>
    </div>
  )
}
