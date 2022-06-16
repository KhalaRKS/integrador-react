import { useState } from "react";

interface CardItemProps {
    title: string,
    handleClick: () => void,
    image: string[],
}

export default function CardItem ({title, handleClick, image}: CardItemProps) {
  console.log('image desde CardItem: '+  image);
  console.log(title, image);
  const [imgPreview, setImgPreview] = useState(image[0])
  
  return (
    <div 
    onMouseEnter={() => {imgPreview === image[0] ? setImgPreview(image[1]) : setImgPreview(image[0])}} 
    onMouseLeave={() => {imgPreview === image[1] ? setImgPreview(image[0]) : setImgPreview(image[1])}}
    className='flex flex-col cursor-pointer gap-1 bg-slate-100 h-56 w-52 hover:h-72 overflow-hidden p-1 transition-all' onClick={handleClick}>
    <img 
    src={imgPreview} 
    className="w-56 max-h-48  transition-all self-center justify-center" 
    alt="" />
    <div className='flex flex-col justify-center self-center'>
      <p className='w-full text-center'>{title}</p>
      <p className='w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </div>
  )
}
