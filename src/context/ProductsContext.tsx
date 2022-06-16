
import {createContext, useState} from 'react'
import { remerasMenPath, remerasWomenPath } from '../constants/Constantes';

interface AppContextInterface {
  productos: any[] | null,
}
export const productsContext = createContext(null as any)

const { Provider } = productsContext
console.log(productsContext);


export function ProductsContext({children}: any | undefined) {
    const [products, setProducts] = useState([
      {
        id: 1,
        name: 'Musculosa Bambooboo',
        price: 3600,
        description: `LLAMÓ EL VERANO, DIJO QUE NECESITAS 
        LA MUSCULOSA BAMBOOBOO TODOS LOS DÍAS. 
        HECHO DE UN JERSEY DE ALGODÓN 100% TRATADO CON 
        UN LAVADO DE PRENDAS PARA SUAVIDAD Y PREENCOGIDO 
        PARA UN GRAN AJUSTE.`,
        image:['https://i.ibb.co/ZRjDgjf/musculosa-negra-01.webp', 'https://i.ibb.co/7WZC6Lz/musculosa-negra-02.webp'],
        category: 'remeras',
        colores: ['negra', 'verde'],
        quantity: 1,
    },
    {
        id: 2,
        name: 'Musculosa Bambooboo',
        price: 3600,
        description: `LLAMÓ EL VERANO, DIJO QUE NECESITAS 
        LA MUSCULOSA BAMBOOBOO TODOS LOS DÍAS. 
        HECHO DE UN JERSEY DE ALGODÓN 100% TRATADO CON 
        UN LAVADO DE PRENDAS PARA SUAVIDAD Y PREENCOGIDO 
        PARA UN GRAN AJUSTE.`,
        image:['https://i.ibb.co/ZRjDgjf/musculosa-negra-01.webp', 'https://i.ibb.co/7WZC6Lz/musculosa-negra-02.webp'],
        category: 'remeras',
        colores: ['negra', 'verde'],
        quantity: 1,
    },
    {
        id: 3,
        name: 'Musculosa Bambooboo',
        price: 3600,
        description: `LLAMÓ EL VERANO, DIJO QUE NECESITAS 
        LA MUSCULOSA BAMBOOBOO TODOS LOS DÍAS. 
        HECHO DE UN JERSEY DE ALGODÓN 100% TRATADO CON 
        UN LAVADO DE PRENDAS PARA SUAVIDAD Y PREENCOGIDO 
        PARA UN GRAN AJUSTE.`,
        image:['https://i.ibb.co/ZRjDgjf/musculosa-negra-01.webp', 'https://i.ibb.co/7WZC6Lz/musculosa-negra-02.webp'],
        category: 'remeras',
        colores: ['negra', 'verde'],
        quantity: 1,
    },
    {
        id: 4,
        name: 'Musculosa Bambooboo',
        price: 3600,
        description: `LLAMÓ EL VERANO, DIJO QUE NECESITAS 
        LA MUSCULOSA BAMBOOBOO TODOS LOS DÍAS. 
        HECHO DE UN JERSEY DE ALGODÓN 100% TRATADO CON 
        UN LAVADO DE PRENDAS PARA SUAVIDAD Y PREENCOGIDO 
        PARA UN GRAN AJUSTE.`,
        image:['https://i.ibb.co/ZRjDgjf/musculosa-negra-01.webp', 'https://i.ibb.co/7WZC6Lz/musculosa-negra-02.webp'],
        category: 'remeras',
        colores: ['negra', 'verde'],
        quantity: 1,
    },
    {
      id: 5,
      name: 'Musculosa Bambooboo',
      price: 3600,
      description: `LLAMÓ EL VERANO, DIJO QUE NECESITAS 
      LA MUSCULOSA BAMBOOBOO TODOS LOS DÍAS. 
      HECHO DE UN JERSEY DE ALGODÓN 100% TRATADO CON 
      UN LAVADO DE PRENDAS PARA SUAVIDAD Y PREENCOGIDO 
      PARA UN GRAN AJUSTE.`,
      image:['https://i.ibb.co/ZRjDgjf/musculosa-negra-01.webp', 'https://i.ibb.co/7WZC6Lz/musculosa-negra-02.webp'],
      category: 'remeras',
      colores: ['negra', 'verde'],
      quantity: 1,
  },
    ])


    const contextValue = {
      productos: products,
    }
    return (
      <Provider value={contextValue}>
        {children}
      </Provider>
  )
}
