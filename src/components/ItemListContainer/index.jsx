import { useEffect, useState } from "react";
import { pedirDatos } from "../../heplers/pedirDatos";

// COMPONENTS

import Items from "./Items";

function ItemListContainer({ isTitle }) {
  const [productos, setProductos] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    pedirDatos().then((response) => {
      setShowLoading(false);
      setProductos(response);
    });
  }, []);

  return (
    <article className="flex justify-center flex-wrap">
      {showLoading ? (
        <h1 className="font-bold p-5">Esperando...</h1>
      ) : (
        <div className="flex flex-col mb-8 mt-8 gap-8">
          <h4 className="text-center font-semibold text-xl">{isTitle}</h4>
          <div className="flex">
            <Items productos={productos} />
          </div>
        </div>
      )}
    </article>
  );
}

export default ItemListContainer;
