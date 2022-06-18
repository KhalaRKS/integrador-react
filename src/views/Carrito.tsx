import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { RemoverItem } from "../components/Carrito/RemoverItem"
import { carritoContext } from "../context/CarritoContext"

export function Carrito() {
  const { carrito, cantidad, total, cleanCarrito } = useContext(carritoContext)
  const finalizarCompra = () => {
    console.log("finalizar compra")
  }
  return (
    <>
      {carrito.length > 0 ? (
        <div className="container mx-auto max-w-120">
          {carrito.map((item: any, index: number) => {
            return (
              <div
                key={"key" + index}
                className="flex flex-wrap justify-around min-w-fit py-4 border-b-2"
              >
                <div className="basis-2/5 max-h-48">
                  <img src={item.image} alt={item.name} className="sm:object-contain w-48 h-44" />
                </div>
                <div className="basis-2/5 gap-5 justify-between">
                  <div className="flex flex-col">
                    <p className="">
                      <span className="font-semibold text-lg">Producto: </span>
                      {item.name}
                    </p>
                    <p className="">
                      <span className="font-semibold text-lg">Precio: </span> $
                      {item.price * item.quantity}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Cantidad: </span> {item.quantity}
                    </p>
                    <p>
                      <span className="font-semibold text-lg">Talle: </span>
                      {item.size}
                    </p>
                  </div>
                  <RemoverItem item={item} />
                </div>
              </div>
            )
          })}
          <div className="flex justify-center">
            <p>
              {" "}
              El monto total a abonar es de{" "}
              <span className="font-medium text-lg">${total} pesos</span>.{" "}
            </p>
          </div>
          <div className="flex mx-auto align-middle p-5 justify-around">
            {/* TERMINAR LA FUNCIONALIDAD DE ESTOS 2 BOTONES */}
            <div className="flex align-middle basis-1/3">
              <Button Click={() => cleanCarrito} text="Vaciar Carrito" />
            </div>
            <div className="flex align-middle basis-1/3">
              <Button Click={() => console.log("finalizar compra")} text="Finalizar Compra" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 align-middle content-center justify-center container mx-auto max-w-120">
          <img 
           className="w-120 h-120 mx-auto"
          src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?t=st=1655541667~exp=1655542267~hmac=a72075c8974ed9f0e91057fe9186dd41a240f005a93e87aea2321e781eda2675&w=900"  alt="" />
          <p className="text-2xl font-bold text-center">No hay productos en el carrito</p>
          <Link 
          className="w-fit mx-auto font-bold text-lg select-none hover:bg-green-500 text-green-500  border-2 border-green-500 focus:bg-green-600 focus:text-white font-sans hover:text-white py-1 px-2" 
          to='/'>
            Volver a la tienda
          </Link>
        </div>
      )}
    </>
  )
}
