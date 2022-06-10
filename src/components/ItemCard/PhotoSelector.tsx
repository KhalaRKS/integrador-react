import React from 'react'

export function PhotoSelector() {
    const fotos = {
        fotop: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        fotos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        fotot: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        fotof: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    }
  return (
    <div className='flex basis-full sm:max-w-44 md:basis-2/12 lg:basis-1/12 md:-order-last h-fit grow py-5 max-h-120 scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar md:flex-col sm:py-0 md:justify-center items-start content-start md:items-center  sm:content-center md:max-w-sm'>
        <img src={fotos.fotot} className='w-36 md:w-44 hover:p-0 p-1 transition-all cursor-pointer' alt="" />
        <img src={fotos.fotof} className='w-36 md:w-44 hover:p-0 p-1 transition-all cursor-pointer' alt="" />
        <img src={fotos.fotof} className='w-36 md:w-44 hover:p-0 p-1 transition-all cursor-pointer' alt="" />
        <img src={fotos.fotop} className='w-36 h-fit md:w-44 hover:p-0 p-1 transition-all cursor-pointer' alt="" />
    </div>
  )
}
