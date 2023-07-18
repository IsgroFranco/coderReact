import SearchImg from "../../../assets/search.svg";

function SearchBar() {
  return (
    <form className="flex h-10 focus-within:border-gray-800 border-solid border-2 ">
      <input
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
