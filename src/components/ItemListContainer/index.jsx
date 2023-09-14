import { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toUpperFirstLetter } from "../../helpers/toUpperFirstLetter";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

// COMPONENTS

import Items from "./Items";

function ItemListContainer({ isProductRoute }) {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [titulo, setTitulo] = useState("Todos los productos");
  const { searchInput } = useContext(CartContext);

  const category = useParams().category;
  const location = useLocation();

  useEffect(() => {
    const beersRef = collection(db, "beers");
    const q = category
      ? query(beersRef, where("tipo", "==", category))
      : beersRef;

    if (location.pathname !== "/" || isStarted === false) setIsLoading(true);

    getDocs(q).then((resp) => {
      const responseData = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      if (location.pathname === "/productos" && searchInput) {
        const filtradoProductos = responseData.filter((producto) =>
          producto.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setProductos(filtradoProductos);

        if (filtradoProductos.length === 0) {
          setTitulo("No hay ningun producto con ese nombre");
        } else {
          setTitulo(`Resultados para "${searchInput}"`);
          setProductos(filtradoProductos);
        }
        setIsLoading(false);
      } else if (category) {
        setIsStarted(true);
        setProductos(responseData);
        setTitulo(`Cervezas ${toUpperFirstLetter(category)}`);
        setIsLoading(false);
      } else if (location.pathname === "/") {
        setIsStarted(true);
        setProductos(responseData);
        setTitulo("Algunos productos");
        setIsLoading(false);
      } else {
        setProductos(responseData);
        setTitulo("Todos los productos");
        setIsLoading(false);
      }
    });
  }, [category, searchInput]);

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
