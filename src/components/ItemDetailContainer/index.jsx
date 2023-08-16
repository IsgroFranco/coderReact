import { useState, useEffect } from "react";
import { pedirItemPorId } from "../../heplers/pedirDatos";
import { useParams } from "react-router-dom";

// COMPONENTS

import ItemDetail from "../ItemDetail/index.jsx.jsx";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  let { id } = useParams();
  console.log(item);

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
