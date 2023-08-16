function Footer() {
  return (
    <footer className="text-black ">
      <div className="flex justify-center container mx-auto p-20">
        <div className="flex justify-center gap-32 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold mb-4">Compras</h3>
            <ul className="list-none">
              <li className="mb-2">Tienda Online</li>
              <li className="mb-2">Nuestros Productos</li>
              <li className="mb-2">Ofertas</li>
            </ul>
          </div>

          <div className="flex justify-center flex-col">
            <h3 className="text-xl font-semibold mb-4">Atención al Cliente</h3>
            <ul className="list-none">
              <li className="mb-2">Contacto</li>
              <li className="mb-2">Preguntas Frecuentes</li>
              <li className="mb-2">Política de Devoluciones</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Desarrollado por</h3>
            <p>Nombre de la Empresa o Desarrollador</p>
            <p>Correo Electrónico: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
