import React from 'react'


interface PhotoDisplayProps {
    photo: string,
}
export function PhotoDisplay({ photo }: PhotoDisplayProps) {
  return (
    <div className='flex basis-full md:basis-8/12 lg:basis-6/12 justify-center align-middle'>
            <img className='w-fit shadow-md max-h-120' src={photo} alt="" />
    </div>
  )
}
