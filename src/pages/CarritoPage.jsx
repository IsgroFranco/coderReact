import React, { useContext, useEffect } from "react";
import { CartContex } from "../context/CartContext";

function CarritoPage() {
  const { carrito, vaciarCarrito } = useContext(CartContex);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">
        Carrito de Compras
      </h1>
      <div className="bg-gray-100 p-4 rounded border border-gray-300 mb-4">
        <h2 className="text-xl text-center font-bold mb-2">
          Productos en el Carrito
        </h2>
        {carrito.length === 0 ? (
          <p className="font-medium text-lg mt-10 mb-10 ">
            No hay productos en el carrito.
          </p>
        ) : (
          <ul>
            {carrito.map((producto, index) => (
              <li
                key={index}
                className="flex items-center py-4 border-b border-gray-300"
              >
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-32 h-auto mr-4"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-xl mb-1">{producto.name}</p>
                  <p className="text-gray-500 text-lg">${producto.price}</p>
                  <p className="text-gray-800 font-medium text-lg">
                    Cantidad: {producto.cantidad}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {carrito.length > 0 && (
        <div className="bg-white p-4 rounded border border-gray-300">
          <div className="flex justify-between">
            <button
              onClick={vaciarCarrito}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Vaciar Carrito
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarritoPage;
