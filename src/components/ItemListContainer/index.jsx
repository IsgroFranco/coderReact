import { useEffect, useState, useContext } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useLocation, useParams } from "react-router-dom";
import { toUpperFirstLetter } from "../../helpers/toUpperFirstLetter";
import { CartContex } from "../../context/CartContext";

// COMPONENTS

import Items from "./Items";

function ItemListContainer({ isProductRoute }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [titulo, setTitulo] = useState("Todos los productos");
  const { searchInput } = useContext(CartContex);

  const tipo = useParams().tipo;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || isStarted === false) setIsLoading(true);
    pedirDatos().then((response) => {
      if (location.pathname === "/productos" && searchInput) {
        const filtradoProductos = response.filter((producto) =>
          producto.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setProductos(filtradoProductos);
        if (filtradoProductos.length === 0) {
          setTitulo("No hay ningun producto con ese nombre");
        } else {
          setTitulo(`Resultados para "${searchInput}"`);
        }
        setIsLoading(false);
      } else if (tipo) {
        const filtradoProductos = response.filter(
          (producto) => producto.tipo.toLowerCase() === tipo
        );
        setProductos(filtradoProductos);
        setTitulo(`Cervezas ${toUpperFirstLetter(tipo)}`);
        setIsLoading(false);
      } else if (location.pathname === "/") {
        setIsStarted(true);
        setProductos(response);
        setTitulo("Algunos productos");
        setIsLoading(false);
      } else {
        setProductos(response);
        setTitulo("Todos los productos");
        setIsLoading(false);
      }
    });
  }, [tipo, searchInput]);

  return (
    <article className="flex justify-center flex-wrap">
      {isLoading ? (
        <div className="flex flex-col mt-5 gap-2">
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <span className="font-bold p-5">Esperando...</span>
        </div>
      ) : (
        <div className="flex flex-col mb-8 mt-8 gap-8">
          <h4 className="text-center font-semibold text-3xl">
            {toUpperFirstLetter(titulo)}
          </h4>
          <div className="flex gap-5">
            <Items productos={productos} isProductRoute={isProductRoute} />
          </div>
        </div>
      )}
    </article>
  );
}

export default ItemListContainer;
