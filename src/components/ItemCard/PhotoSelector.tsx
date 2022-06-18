import React from 'react'

interface PhotoSelectorProps {
  photo: string[],
  setPhoto: (photo: string) => void,
} 

export function PhotoSelector({photo, setPhoto}: PhotoSelectorProps) {

  return (
    <div className='flex basis-full sm:max-w-44 overflow-auto md:basis-2/12 lg:basis-1/12 md:-order-last h-fit grow py-5 max-h-120 scrollbar-thumb-gray-500 scrollbar-track-gray-100 scrollbar md:flex-col sm:py-0 md:justify-center md:items-start md:content-start items-center  sm:content-center md:max-w-sm'>
        {
          photo.map((img, index) =>
            <img 
            onClick={() => setPhoto(img)}
            key={index} 
            src={img} 
            className='w-32 max-h-52 md:w-44 hover:p-0 p-1 transition-all cursor-pointer object-cover'
             alt=''/>
        )}
    </div>
  )
}
