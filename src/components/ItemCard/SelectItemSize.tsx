import React from 'react'

export function SelectItemSize() {
  return (
    <select className='text-base p-2 font-bold h-fit border-2 text-gray-900 text-md placeholder-gray-400 dark:text-whit transition-all'>
      <option value="small" className='text-base '>S</option>
      <option value="medium" className='text-base '>M</option>
      <option value="large" className='text-base '>L</option>
      <option value="large" className='text-base '>XL</option>
    </select>
  )
}
