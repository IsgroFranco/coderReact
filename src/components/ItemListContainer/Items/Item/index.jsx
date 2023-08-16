import { Link } from "react-router-dom";

function Item({ data }) {
  return (
    <div className="flex p-5 group">
      <div className="w-52 relative ">
        <img className="w-full" src={data.image} alt={data.name} />
        <div className="absolute bottom-4 left-0 w-full flex items-center justify-center opacity-0 translate-y-3 bg-black bg-opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Link
            to={`detalles/${data.id}`}
            className="text-white text-center py-3 px-4 font-semibold text-base w-full"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Item;
