import { useState, useEffect } from "react";
import { pedirItemPorId } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";

// COMPONENTS

import ItemDetail from "./ItemDetail/index.jsx";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    pedirItemPorId(id).then((response) => setItem(response));
  }, [id]);

  return (
    <div className="flex justify-center">
      {item && <ItemDetail item={item} />}
    </div>
  );
}
export default ItemDetailContainer;
