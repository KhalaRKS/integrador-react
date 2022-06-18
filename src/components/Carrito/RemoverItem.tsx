import { useContext } from "react"
import { carritoContext } from "../../context/CarritoContext"
import { Productos } from "../../views/Home"
interface RemoverItemProps{
    item: Productos,
}


export function RemoverItem({item}: RemoverItemProps) {

    const {removeProducto} = useContext(carritoContext)

  return (
    <button
        className="border-2 select-none border-red-500 hover:bg-red-500  text-red-500 hover:text-white font-bold py-2 px-4 rounded"
        onClick={() => removeProducto(item)}
    >
        Eliminar
    </button>
  )
}
