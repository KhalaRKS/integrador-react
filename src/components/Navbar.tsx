import { useEffect, useState} from 'react'
import { Link, useLocation} from 'react-router-dom';
import { carritoContext } from '../context/CarritoContext'
import LogInButtons from './LogInButtons'
import { MenuVertical } from './MenuVertical/MenuVertical';
import {CartIcon} from '../assets/images/vectores/CartIcon';

function Navbar() {
  const [desplegarMenu, setDesplegarMenu] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if(desplegarMenu)
    setDesplegarMenu(!desplegarMenu)
  }, [location])
  
  
  return (  
    <>
    <div className='shadow-lg fixed w-full bg-white px-2 z-20 py-0.5'>
    <nav className='container bg-white flex flex-row items-center mx-auto justify-between py-2'>
      <div className='flex justify-between basis-full  md:basis-2/5 gap-1 items-center'>
        <Link to='/' className='text-xl font-medium'>Fashion</Link>
        <div className="flex justify-center">
        <div className="xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full rounded">
              <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
              <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=' justify-around basis-1/3 hidden md:flex items-center'>
        <Link to="/" className='flex-1 text-center'>Home</Link>
        <Link to="about" className='flex-1 text-center'>About</Link>
        <Link to="item" className='flex-1 text-center'>Item</Link>
        <Link to="carrito" className='flex-1 text-center'><CartIcon/></Link>
      </div>
      <div className='hidden md:flex'>
      <LogInButtons/>
      </div>
        <div className="space-y-2 block md:hidden cursor-pointer" onClick={() => desplegarMenu ? setDesplegarMenu(false) : setDesplegarMenu(true)}>
          <div className={desplegarMenu ? 'rotate-45 translate-y-1.5 w-8 h-0.5 bg-gray-500 transition-all' : 'transition-all w-8 h-0.5 bg-gray-500'}></div>
          <div className={desplegarMenu ? 'hidden' : 'w-8 h-0.5 bg-gray-500'}></div>
          <div className={desplegarMenu ? '-rotate-45 -translate-y-1 w-8 h-0.5 bg-gray-500 transition-all' : 'transition-all w-8 h-0.5 bg-gray-500'}></div>
        </div>
    </nav>

    
    </div>
     <MenuVertical showMenuOptions={desplegarMenu} className={desplegarMenu ? 'fixed transition-all items-center justify-center flex w-full h-64 opacity-100 translate-y-14 md:hidden basis-1/4 duration-1000 z-10 bg-white' : 'bg-white z-10 fixed transition-all -translate-y-full h-64 w-full md:hidden opacity-0 duration-1000'}/>
     </>
  )
}

export default Navbar