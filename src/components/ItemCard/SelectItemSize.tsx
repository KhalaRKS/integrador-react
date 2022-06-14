import {useState} from 'react'

interface SelectItemSizeProps {
  getSize: (value) => void,
}

export function SelectItemSize({getSize}: SelectItemSizeProps) {

  const [data, setData] = useState('small')
  const handleChange = (value: string) => {
    setData(value)
    getSize(data)
  }
  return (
    <select onChange={(e) => handleChange(e.target.value)} className='text-base p-2 font-bold h-fit border-2 text-gray-900 text-md placeholder-gray-400 dark:text-whit transition-all'>
      <option value="small" className='text-base '>S</option>
      <option value="medium" className='text-base '>M</option>
      <option value="large" className='text-base '>L</option>
      <option value="extraLarge" className='text-base '>XL</option>
    </select>
  )
}
