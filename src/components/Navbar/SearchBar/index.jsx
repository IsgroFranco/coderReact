import { useContext } from "react";
import SearchImg from "../../../assets/search.svg";
import { CartContext } from "../../../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchInput, handleChange } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== "/productos" && searchInput) {
      navigate("/productos");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-10 focus-within:border-gray-800 border-solid border-2 "
    >
      <input
        onChange={handleChange}
        value={searchInput}
        className="w-full focus:outline-none p-2"
        type="text"
        placeholder="Buscar productos..."
      />
      <button className="w-12 focus:outline-none" type="submit">
        <img className="w-6" src={SearchImg} alt="" />
      </button>
    </form>
  );
}
export default SearchBar;
