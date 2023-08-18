import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useLocation, useParams } from "react-router-dom";
import { toUpperFirstLetter } from "../../helpers/toUpperFirstLetter";

// COMPONENTS

import Items from "./Items";

function ItemListContainer({ isProductRoute }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titulo, setTitulo] = useState("Todos los productos");

  const tipo = useParams().tipo;
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    pedirDatos().then((response) => {
      if (tipo) {
        const filtradoProductos = response.filter(
          (producto) => producto.tipo.toLowerCase() === tipo
        );
        setProductos(filtradoProductos);
        setTitulo(`Cervezas ${toUpperFirstLetter(tipo)}`);
        setIsLoading(false);
      } else if (location.pathname === "/") {
        setProductos(response);
        setTitulo("Algunos productos");
        setIsLoading(false);
      } else {
        setProductos(response);
        setIsLoading(false);
      }
    });
  }, [tipo]);

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
