import React from 'react'

export function QuantityItem() {

  return (
    <div className='flex h-fit border-y-2'>
        <button className='w-8 border-x-2  hover:bg-slate-100 active:bg-slate-200 h-10 font-medium text-lg'>-</button>
        <input className='w-10 md:w-12 h-10 font-medium text-center text-lg' type="text" value="1" />
        <button className='w-8 border-x-2 hover:bg-slate-100 active:bg-slate-200 h-10 font-medium text-lg'>+</button>
    </div>
  )
}
