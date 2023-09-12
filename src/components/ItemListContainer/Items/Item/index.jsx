import { Link } from "react-router-dom";

function Item({ data, isProductRoute }) {
  return (
    <div className="flex group">
      <div className="flex flex-col relative ">
        <img className="w-52 h-52" src={data.image} alt={data.name} />
        <div
          className={`absolute ${
            isProductRoute ? "bottom-32" : "bottom-4"
          } left-0 w-full flex items-center justify-center opacity-0 translate-y-3 bg-black bg-opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`}
        >
          <Link
            to={`detalles/${data.id}`}
            className="text-white text-center py-3 px-4 font-semibold text-base w-full"
          >
            Ver detalles
          </Link>
        </div>
        {isProductRoute && (
          <div className="ml-2">
            <h4 className="text-lg font-semibold mb-1">{data.name}</h4>
            <h5 className="text-gray-600 mb-1">Marca: {data.marca}</h5>
            <h5 className="text-gray-600 mb-1">Tipo: {data.tipo}</h5>
            <p className="font-medium text-gray-800 text-lg">${data.price}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
