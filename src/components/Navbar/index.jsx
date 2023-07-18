import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

function Navbar() {
  return (
    <div>
      <div className="inline-grid grid-cols-3 justify-between items-center w-full p-5">
        <Logo />
        <SearchBar />
        <CartWidget />
      </div>
      <div>
        <nav className="flex justify-center">
          <ul className="flex grow gap-4 p-5 text-black font-semibold justify-center">
            <li className="cursor-pointer">INICIO</li>
            <li className="cursor-pointer">PRODUCTOS</li>
            <li className="cursor-pointer">NOSOTROS</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
