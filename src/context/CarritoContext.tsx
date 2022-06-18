import { createContext, useState, useEffect, useCallback } from "react"
import toast from "react-hot-toast"

interface AppContextInterface {
  carrito: any[] | null
  total: number | null
  cantidad: number | null
  addProducto: (producto: any) => void | null
  removeProducto: (producto: any) => void | null
  cleanCarrito: () => void | null
}
interface productoCarrito {
  id: number | null
  name: string | null
  price: number | null
  description: string | null
  image: string | null
  category: string | null
  quantity: number | null
  size: string | null
}

export const carritoContext = createContext<AppContextInterface>({} as AppContextInterface)

const { Provider } = carritoContext

export function CarritoContext({ children }: any | undefined) {
  const [carrito, setCarrito] = useState<productoCarrito[]>([])
  const [productQuantity, setProductQuantity] = useState(0)
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  const addProducto = (producto: productoCarrito) => {
    let productoEnCarrito = carrito.find(
      (item: productoCarrito) => item.id === producto.id && item.size === producto.size
    )
    if (productoEnCarrito) {
      setProductQuantity(producto.quantity)
      productoEnCarrito.quantity += producto.quantity
    } else {
      setCarrito([...carrito, producto])
    }

    setTotal(total + producto.price * producto.quantity)
    toast.success('Agregado al carrito!')
    
  }
  const removeProducto = (producto: productoCarrito) => {
    let productoEnCarrito = carrito.findIndex(
      (item: productoCarrito) => item.id === producto.id && item.size === producto.size
    )
    console.log(productoEnCarrito);
    
    if (productoEnCarrito >= 0) {
      let newCarrito = carrito
        newCarrito.splice(productoEnCarrito, 1)
        setCarrito([...newCarrito])
        setTotal(total - producto.price * producto.quantity)
        toast.error("Producto eliminado del carrito")
    }else{
        cleanCarrito()
    }
  }
  const cleanCarrito = () => {
    setCarrito([])
    setTotal(0)
    toast.success("Productos eliminados del carrito")
  }

  const contextValue: AppContextInterface = {
    carrito: carrito,
    cantidad: cantidad,
    total: total,
    addProducto: addProducto,
    removeProducto: removeProducto,
    cleanCarrito: cleanCarrito,
  }

  useEffect(() => {
    setCantidad(carrito.length)
  }, [carrito])

  return <Provider value={contextValue}>{children}</Provider>
}
