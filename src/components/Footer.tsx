import React from 'react'

export default function Footer() {
  return (
    <div className='flex self-center justify-center flex-col my-5'>
        <p className='text-sm text-center'>Made with <i className="fa fa-heart" style={{fontSize:'16px', color:'red'}}></i> by <a className='text-base text-blue-400' href='https://albanokainer.com'>Albano Kainer</a></p>
        <p className='flex mx-auto self-center items-center text-sm text-center'>Proyecto creado con fin educativo para <a href=""><img src="https://miro.medium.com/max/1400/1*JOiMl66XSaHmiKf3Oi2wcQ.png" style={{width: '32px'}} alt='' /></a></p>
    </div>
  )
}
