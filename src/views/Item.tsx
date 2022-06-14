/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PhotoDisplay } from "../components/ItemCard/PhotoDisplay"
import { PhotoSelector } from "../components/ItemCard/PhotoSelector"
import { PriceItem } from "../components/ItemCard/PriceDisplay.tsx/PriceItem"
import { QuantityItem } from "../components/ItemCard/QuantityItem"
import { SelectItemSize } from "../components/ItemCard/SelectItemSize"
import { Loader } from '../components/Loader';
import { productsContext } from "../context/ProductsContext"
import { carritoContext } from '../context/CarritoContext';

interface Producto {
  id: number,
  name: string,
  image: string,
  price: number,
  description: string,
  quantity: number,
  category: string,
  }


export function Item() {
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const {category, name} = useParams()
  const {addProducto} = useContext(carritoContext)
  console.log(category, name);
  
  useEffect(() => {
    setLoading(false)
  }
  , [])
  
  const fotos = {
    title: "Gatito siames tierno, acostadito mirando a la pantalla.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate blanditiis veritatis tenetur, nam possimus, ratione suscipit harum ut, exercitationem soluta ab laboriosam autem eaque quia quasi nisi ipsum esse architecto.",
    remera:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  }
  // SE TIENE QUE GUARDAR EL PRECIO Y CANTIDAD DE ITEM EN UN CONTEXTO

  const getQuantity = (quan: number) => {
    setQuantity(quan)
  }
  console.log("CANTIDAD EN ITEM, CONTEXT" + quantity);
  
  return(
    <>
      
    {loading 
      ? <Loader/>
      : <div className="lg:container w-full md:h-180 lg:h-fit md:container p-1 md:p-0 mx-auto my-5">
          <h2 className="text-sm uppercase font-extralight font">{category} {'>'} {category} {'>'} # {name} </h2>
          <div className="flex flex-wrap flex-col sm:flex-row sm:gap-2  md:max-h-120 my-2">
              <PhotoDisplay photo={fotos.remera} />
              <PhotoSelector />
              <div className="flex md:gap-2 flex-col basis-full md:basis-12/12 lg:basis-4/12">
                <h2 className="text-lg font-semibold">{fotos.title}</h2>
                <PriceItem price={15} />
                <div className="flex flex-row gap-2">
                  <SelectItemSize />
                  <QuantityItem getQuantity={getQuantity}/>
                  <button className="px-2 py-2 h-11 bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-900 text-white font-bold">
                    Agregar al carrito
                  </button>
                </div>
                <p>{fotos.description}</p>
            </div>
          </div>
        </div>
    }
  </>
  );
}

