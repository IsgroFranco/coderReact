import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { FaCheckCircle } from "react-icons/fa";

function Checkout() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const [pedidoId, setPedidoId] = useState("");

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      carrito: carrito,
      total: precioTotal(),
    };

    vaciarCarrito();

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
    });
  };

  if (pedidoId) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-700 text-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-semibold mb-4">
            ¡Gracias por su compra!
          </h1>
          <p className="text-xl">Su código de pedido es: {pedidoId}</p>
          <p className="text-lg mt-4">Su pedido ha sido confirmado.</p>
          <div className="mt-8">
            <FaCheckCircle className="text-5xl text-green-500 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Finalizar compra
        </h2>
        <form onSubmit={handleSubmit(comprar)}>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              {...register("nombre")}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-gray-700 font-medium mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              {...register("apellido")}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              {...register("email")}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block text-gray-700 font-medium mb-2"
            >
              Telefono
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
              {...register("telefono")}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Checkout;
