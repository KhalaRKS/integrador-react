import React from 'react'
import { Link } from 'react-router-dom'
 interface NavbarProps {
   text: string,
 }
function Button({text}: NavbarProps) {
  return (
    <button className="bg-sky-600 hover:bg-sky-700 border-2 border-sky-600 focus:border-2 focus:border-sky-800 rounded-full font-sans font-medium text-md text-white py-1 px-2">
        {text}
    </button>
  )
}

export default Button