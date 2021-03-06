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
  image: Array<string>,
  price: number,
  description: string,
  quantity: number,
  category: string,
  }


export function Item() {
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('small')
  const {category,id} = useParams()
  const {addProducto, carrito} = useContext(carritoContext)
  const {productos} = useContext(productsContext);
  const [currentItemImage, setCurrentItemImage] = useState('')
  const [item, setItem] = useState({
    id:null,
    name: null,
    image: null,
    price: null,
    description: null,
    quantity: null,
    category: null,
  })
  
  useEffect(() => {
    productos.forEach((element: Producto) => {
      let prodId = parseInt(id)
      if(element.id === prodId){
        setItem(element)
        setCurrentItemImage(element.image[0])
      }
    });
    setLoading(false)
  }, [])

  // SE TIENE QUE GUARDAR EL PRECIO Y CANTIDAD DE ITEM EN UN CONTEXTO

  const getQuantity = (quan: number = 1) => {
    setQuantity(quan)
  }
  const getSize = (tamano: string = 'small') =>{
    setSize(tamano)
    
  }
  const enviarAlCarrito = (producto: Producto) =>{
    let objetoConDetalles = {
      ...producto,
      quantity,
      size
    }
    addProducto(objetoConDetalles)
  }

  const showSelectedImage = (image: string) => {
    setCurrentItemImage(image)
  }

  return(
    <>
      
    {loading 
      ? <Loader/>
      : <div className="lg:container w-full md:h-180 lg:h-fit md:container p-1 md:p-0 mx-auto basis-8/12">
          <h2 className="text-sm uppercase font-extralight font">{category} {'>'} {category} {'>'} # {id} </h2>
          <div className="flex flex-wrap flex-col sm:flex-row sm:gap-2  md:max-h-120 my-2">
              <PhotoDisplay photo={currentItemImage} />
              <PhotoSelector setPhoto={showSelectedImage} photo={item?.image} />
              <div className="flex md:gap-2 flex-col basis-full md:basis-12/12 lg:basis-4/12">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <PriceItem price={item.price} />
                <div className="flex flex-row gap-2">
                  <SelectItemSize getSize={getSize} />
                  <QuantityItem getQuantity={getQuantity}/>
                  <button onClick={() => enviarAlCarrito(item)} className="px-2 py-2 h-11 bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-900 text-white font-bold">
                    Agregar al carrito
                  </button>
                </div>
                <p>{item.description.toLowerCase()}</p>
            </div>
          </div>
        </div>
    }
  </>
  );
}

