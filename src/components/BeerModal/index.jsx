import CloseIcon from "../../assets/Close.png";

function BeerModal({ onClose, data }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="bg-white p-5 rounded-lg z-10 max-w-xl w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold font-mono text-lg active:scale-90"
          onClick={onClose}
        >
          <div className="w-3">
            <img className="w-full " src={CloseIcon} alt="" />
          </div>
        </button>
        <div className="flex justify-center items-center">
          <aside className="w-64 p-4">
            <img src={data.image} alt="Cerveza" />
          </aside>
          <section className="w-3/5 p-4 font-semibold">
            <h2 className="text-xl font-semibold mb-4">Especificaciones</h2>
            <p className="mb-2">Marca: {data.marca}</p>
            <p className="mb-2">Tipo: {data.tipo}</p>
            <p className="mb-2">Ingredientes: [Ingredientes]</p>
            <p className="mb-2">Aromas y sabores: [Aromas y sabores]</p>
            <p className="mb-2">IBU: [Porcentaje de amargor]</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BeerModal;
