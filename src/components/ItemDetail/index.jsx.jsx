function ItemDetail({ item }) {
  return (
    <section className="flex mt-20 mb-20">
      <div className="w-80">
        <img src={item.image} alt={item.name} className="w-full" />
      </div>
      <div className="ml-8">
        <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
        <p className="text-gray-600 mb-1">Marca: {item.marca}</p>
        <p className="text-gray-600 mb-1">Tipo: {item.tipo}</p>
        <p className="font-medium text-gray-800 text-lg mb-2">
          Precio: ${item.price.toFixed(2)}
        </p>
        <div className="flex items-center mb-4">
          <button className="px-3 py-1 border border-black font-medium text-black rounded">
            -
          </button>
          <span className="mx-2 font-semibold">1</span>
          <button className="px-3 py-1 border border-black font-medium text-black rounded">
            +
          </button>
        </div>
        <button className="mt-2 px-4 py-2 border border-black font-medium text-black rounded">
          Agregar al Carrito
        </button>
      </div>
    </section>
  );
}

export default ItemDetail;
