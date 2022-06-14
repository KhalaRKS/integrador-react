
import React, { createContext, useState } from 'react'

interface AppContextInterface {
    carrito: any[] | null,
    total: number | null,
    cantidad: number | null,
    addProducto: (producto: any) => void | null,
}
interface productoCarrito{
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    category: string,
    quantity: number,
    size: string
}

export const carritoContext = createContext<AppContextInterface>(null as any)

const { Provider } = carritoContext


export function CarritoContext({children}: any | undefined) {
    
    const [carrito, setCarrito] = useState<any[]>([{
        id: 1,
        name: 'Producto 1',
        price: 100,
        description: 'Descripcion del producto 1',
        image: 'https://picsum.photos/200/300',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 2,
        name: 'Producto 2',
        price: 200,
        description: 'Descripcion del producto 2',
        image: 'https://picsum.photos/200/400',
        category: 'remeras',
        quantity: 1,
    },
])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    
    
    const contextValue: AppContextInterface = {
        carrito: carrito,
        cantidad: cantidad,
        total: total,
        addProducto: addProducto,
    }

    function addProducto (producto: productoCarrito) {

        carrito.forEach(element =>{
            console.log(element, producto);
            
            
        if( element.id == producto.id) {
            if (element.size == producto.size){
                element.quantity = element.quantity + producto.quantity
                element.size = producto.size
            }
        }
            setCarrito([...carrito, producto])
            setCantidad(carrito.length)
        
        })
    }
    return (
    <Provider value={contextValue}>
        {children}
    </Provider>
  )
}
