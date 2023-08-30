import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";

import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

import Flecha from "../../assets/Flecha.png";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setDropDown(false);
    setIconRotate(false);
  }, [location.pathname]);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
    setIconRotate(!iconRotate);
  };

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
            <Link to="/" className="cursor-pointer">
              INICIO
            </Link>
            <Link to="productos" className="cursor-pointer">
              PRODUCTOS
            </Link>
            <Link to="nosotros" className="cursor-pointer">
              NOSOTROS
            </Link>
            <li className="relative">
              <button
                onClick={toggleDropDown}
                className={`cursor-pointer ${
                  location.pathname === "/nosotros" ? "disabled" : ""
                }`}
              >
                TIPOS{" "}
                <span
                  className={` w-2 -rotate-90 inline-block font-bold text-medium transition duration-300 ease-in ${
                    iconRotate ? "rotate" : ""
                  }`}
                >
                  <img src={Flecha} alt="Flecha" className="w-full" />
                </span>
              </button>
              <ul
                className={`dropdown-menu bg-white absolute flex flex-col gap-1 ${
                  dropDown ? "open" : ""
                } ${location.pathname === "/nosotros" ? "disabled" : ""} `}
              >
                <Link to="productos/ipa" className="mt-2">
                  IPA
                </Link>
                <Link to="productos/lager" className="mb-2">
                  LAGER
                </Link>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
