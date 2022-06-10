import React from 'react'

interface PriceItemProps {
    price: number
}
export function PriceItem({price}: PriceItemProps) {

  return (

    <p className='font-sans text-3xl font-semibold'>
       ${price}
    </p>
  )
}
