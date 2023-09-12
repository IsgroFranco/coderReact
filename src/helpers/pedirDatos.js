export const getBeers = async () => {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
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
