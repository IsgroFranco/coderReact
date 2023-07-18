import { useState } from "react";

function ItemListContainer({ greetings }) {
  const [saludo, setSaludo] = useState(greetings);

  function changeGreetings() {
    saludo === greetings ? setSaludo("Hello People") : setSaludo(greetings);
  }

  return (
    <div className="flex flex-col items-center p-5">
      <p className="font-semibold">{saludo}</p>
      <button
        onClick={changeGreetings}
        className="bg-black text-white p-2 transform active:scale-95 transition-all duration-200"
      >
        Press me!
      </button>
    </div>
  );
}

export default ItemListContainer;
