import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

function ItemDetail({ item, stock, setStock }) {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const handleSumar = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : null;
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
    const nuevoStock = stock > 0 ? stock - cantidad : stock;
    setStock(nuevoStock);
    setCantidad(0);
    localStorage.setItem(`stock_${item.id}`, nuevoStock.toString());
  };

  return (
    <section className="flex mt-20 mb-20">
      <div className="w-2/5">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto shadow-2xl rounded-lg"
        />
      </div>
      <div className="ml-8 flex flex-col ">
        <div>
          <h2 className="text-4xl font-semibold mb-3">{item.name}</h2>
          <p className="text-gray-700 text-lg font-medium mb-1">
            Marca: {item.marca}
          </p>
          <p className="text-gray-700 text-lg font-medium mb-1">
            Tipo: {item.tipo}
          </p>
          <p className="text-gray-700 text-lg font-medium mb-1">
            Stock: {stock}
          </p>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="px-4 py-2 border border-black font-medium text-lg text-black rounded"
            onClick={handleRestar}
          >
            -
          </button>
          <span className="mx-3 font-semibold text-xl">{cantidad}</span>
          <button
            className="px-4 py-2 border border-black font-medium text-lg text-black rounded"
            onClick={handleSumar}
          >
            +
          </button>
        </div>
        <p className="font-medium text-gray-800 text-2xl mt-4">
          Precio: ${item.price.toFixed(2)}
        </p>
        <button
          className="mt-6 px-6 py-3 border border-black font-medium text-lg text-black rounded"
          onClick={handleAgregar}
        >
          Agregar al Carrito
        </button>
      </div>
    </section>
  );
}

export default ItemDetail;
