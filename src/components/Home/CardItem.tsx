
interface CardItemProps {
    title: string,
    handleClick: () => void,
    image: string,
}

export default function CardItem ({title, handleClick, image}: CardItemProps) {
  return (
    <div className='flex flex-col cursor-pointer gap-1 bg-slate-100 h-80 w-52 hover:h-96 overflow-hidden p-1 transition-all' onClick={handleClick}>
    <img src={image}  className="w-56 h-72  transition-all self-center justify-center" alt="" />
    <div className='flex flex-col justify-center self-center'>
      <p className='w-full text-center'>{title}</p>
      <p className='w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </div>
  )
}
