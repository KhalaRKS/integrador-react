import React from 'react'

 interface ButtonProps {
   text: string,
   styles?: string,
   Click?: () => void,
 }
function Button({text, Click, styles}: ButtonProps) {
  return (
    <button onClick={() => Click} className="w-fit mx-auto font-bold text-lg select-none hover:bg-green-500 text-green-500  border-2 border-green-500 focus:bg-green-600 focus:text-white font-sans hover:text-white py-1 px-2">
        {text}
    </button>
  )
}

export default Button