import React from 'react'
import { useState } from 'react'

export function QuantityItem({getQuantity}) {
  const [quantity, setQuantity] = useState(1)

  const handleChange = (e) => {
    setQuantity(e.target.value)
    getQuantity(e.target.value)
  }
  const handlePlus = () => {
    setQuantity(quantity + 1)
    getQuantity(quantity + 1)
  }
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      getQuantity(quantity - 1)
    }
  }

  return (
    <div className='flex h-fit border-y-2'>
        <button onClick={() => handleMinus()} className='w-8 border-x-2 hover:bg-slate-100 active:bg-slate-200 h-10 font-medium text-lg'>-</button>
        <input className='w-10 md:w-12 h-10 font-medium text-center text-lg' readOnly type="text" onChange={(e) => handleChange(e)} value={quantity} />
        <button onClick={() => handlePlus()} className='w-8 border-x-2 hover:bg-slate-100 active:bg-slate-200 h-10 font-medium text-lg'>+</button>
    </div>
  )
}
