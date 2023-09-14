import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

// COMPONENTS

import ItemDetail from "./ItemDetail/index.jsx";
import { db } from "../../firebase/firebaseConfig.js";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stock, setStock] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const beerRef = doc(db, "beers", id);
    getDoc(beerRef).then((resp) => {
      const itemResp = { ...resp.data(), id: resp.id };
      setItem(itemResp);

      const savedStock = localStorage.getItem(`stock_${id}`);
      setStock(savedStock !== null ? parseInt(savedStock) : itemResp.stock);

      setIsLoading(false);

      setIsLoading(false);
    });
  }, [id]);

  return (
    <section className="flex justify-center">
      {isLoading ? (
        <div className="flex flex-col mt-5 gap-2">
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <span className="font-bold p-5">Esperando...</span>
        </div>
      ) : (
        <div className="flex justify-center">
          {item && <ItemDetail item={item} stock={stock} setStock={setStock} />}
        </div>
      )}
    </section>
  );
}
export default ItemDetailContainer;
