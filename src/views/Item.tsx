import React from 'react'
import { PhotoDisplay } from '../components/ItemCard/PhotoDisplay'
import { PhotoSelector } from '../components/ItemCard/PhotoSelector'
import { PriceItem } from '../components/ItemCard/PriceDisplay.tsx/PriceItem'
import { QuantityItem } from '../components/ItemCard/QuantityItem'
import { SelectItemSize } from '../components/ItemCard/SelectItemSize'
export function Item() {
    const fotos = {
        remera: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

    }
    // SE TIENE QUE GUARDAR EL PRECIO Y CANTIDAD DE ITEM EN UN CONTEXTO

  return (
    <div className='lg:container w-full md:container p-1 md:p-0 mx-auto'>
        <h1>Item</h1>
        <div className='flex flex-wrap flex-col sm:flex-row sm:gap-2 md:gap-4  md:max-h-120'>
            <PhotoDisplay photo={fotos.remera} />
            <PhotoSelector/>
            <div className='flex md:gap-2 flex-col basis-full md:basis-12/12 lg:basis-4/12'>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, temporibus. </h2>
              <PriceItem price={15}/>
              <div className='flex flex-row gap-2'>
                <SelectItemSize/>
                <QuantityItem/>
                <button className='px-2 py-2 h-11 bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-900 text-white font-bold'>  Agregar al carrito</button>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatem tempore ducimus excepturi iure pariatur laboriosam repellendus. Recusandae, provident quisquam.</p>
            </div>
        </div>
    </div>
  )
}