import { useState } from "react";

function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
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
        <button className="mt-6 px-6 py-3 border border-black font-medium text-lg text-black rounded">
          Agregar al Carrito
        </button>
      </div>
    </section>
  );
}

export default ItemDetail;
