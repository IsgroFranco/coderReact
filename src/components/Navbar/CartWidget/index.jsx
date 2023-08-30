import { Link } from "react-router-dom";
import Cart from "../../../assets/CartWidget.svg";
import { useContext } from "react";
import { CartContex } from "../../../context/CartContext";

function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContex);

  return (
    <div className="flex justify-end p-2 mr-5">
      <Link to="/carrito">
        <div className="relative w-7 cursor-pointer">
          <img className="w-full" src={Cart} alt="" />
          <span className="absolute top-0 right-0 -mt-1.5 -mr-1.5 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xs ">
            {cantidadEnCarrito()}
          </span>
        </div>
      </Link>
    </div>
  );
}
export default CartWidget;
