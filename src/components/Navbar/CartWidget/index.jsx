import Cart from "../../../assets/CartWidget.svg";

function CartWidget() {
  return (
    <div className="flex justify-end p-2 mr-5">
      <div className="relative w-7 cursor-pointer">
        <img className="w-full" src={Cart} alt="" />
        <span className="absolute top-0 right-0 -mt-1.5 -mr-1.5 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xs ">
          0
        </span>
      </div>
    </div>
  );
}
export default CartWidget;
