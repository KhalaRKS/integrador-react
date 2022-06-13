import React from 'react'
import { useState } from 'react'

export function QuantityItem() {
  const [quantity, setQuantity] = useState(1)

  const handleClick = (value: string) => {
    
    if(value === '+') {
      setQuantity(quantity + 1)
    }else {
      if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
}
  return (
    <div className='flex h-fit border-y-2'>
        <button onClick={() => handleClick('-')} className='w-8 border-x-2 hover:bg-slate-100 active:bg-slate-200 h-10 font-medium text-lg'>-</button>
        <input className='w-10 md:w-12 h-10 font-medium text-center text-lg' readOnly type="text" value={quantity} />
        <button onClick={() => handleClick('+')} className='w-8 border-x-2 hover:bg-slate-100 active:bg-slate-200 h-10 font-medium text-lg'>+</button>
    </div>
  )
}
