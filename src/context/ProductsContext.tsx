
import {createContext, useState} from 'react'

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
    {   id: 3,
        name: 'Producto 3',
        price: 300,
        description: 'Descripcion del producto 3',
        image: 'https://picsum.photos/200/500',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 4',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/600',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 5',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/700',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 6',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/800',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 7',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 8',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        category: 'remeras',
        quantity: 1,
    }
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
