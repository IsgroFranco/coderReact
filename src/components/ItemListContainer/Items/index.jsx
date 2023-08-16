import Item from "./Item";

function Items({ productos }) {
  return productos.map((data) => (
    <Item key={data.id} data={data} buttonText="Ver Detalles" />
  ));
}

export default Items;
