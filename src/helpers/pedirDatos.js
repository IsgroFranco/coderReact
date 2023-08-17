import { products } from "../mocks/data";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = products.find((el) => el.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({ error: "No se encontro el producto" });
    }
  });
};
