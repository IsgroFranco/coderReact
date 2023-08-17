import Item from "./Item";

function Items({ productos, isProductRoute }) {
  return productos.map((data) => (
    <Item
      key={data.id}
      data={data}
      buttonText="Ver Detalles"
      isProductRoute={isProductRoute}
    />
  ));
}

export default Items;
