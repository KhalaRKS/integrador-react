
import React, { createContext, useState } from 'react'

interface AppContextInterface {
    carrito: any[] | null,
    total: number | null,
    cantidad: number | null,
    addProducto: (producto: any) => void | null,
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

    function addProducto (producto: any) {
        setCarrito([...carrito, producto])
        setCantidad(cantidad + 1)
    }
    return (
    <Provider value={contextValue}>
        {children}
    </Provider>
  )
}
