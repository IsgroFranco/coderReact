import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useLocation, useParams } from "react-router-dom";
import { toUpperFirstLetter } from "../../helpers/toUpperFirstLetter";

// COMPONENTS

import Items from "./Items";

function ItemListContainer({ isProductRoute }) {
  const [productos, setProductos] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [titulo, setTitulo] = useState("Todos los productos");

  const tipo = useParams().tipo;
  const location = useLocation();

  useEffect(() => {
    pedirDatos().then((response) => {
      setShowLoading(false);
      if (tipo) {
        setProductos(
          response.filter((producto) => producto.tipo.toLowerCase() === tipo)
        );
        setTitulo(`Cervezas ${toUpperFirstLetter(tipo)}`);
      } else if (location.pathname === "/") {
        setProductos(response);
        setTitulo("Algunos productos");
      } else {
        setProductos(response);
      }
    });
  }, [tipo]);

  return (
    <article className="flex justify-center flex-wrap">
      {showLoading ? (
        <h1 className="font-bold p-5">Esperando...</h1>
      ) : (
        <div className="flex flex-col mb-8 mt-8 gap-8">
          <h4 className="text-center font-semibold text-xl">
            {toUpperFirstLetter(titulo)}
          </h4>
          <div className="flex">
            <Items productos={productos} isProductRoute={isProductRoute} />
          </div>
        </div>
      )}
    </article>
  );
}

export default ItemListContainer;
