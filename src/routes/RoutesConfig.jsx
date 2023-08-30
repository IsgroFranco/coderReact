import { Routes, Route } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import ProductosPages from "../pages/ProductosPage";
import NosotrosPage from "../pages/NosotrosPage";
import DetallePage from "../pages/DetallePage";
import ItemListContainer from "../components/ItemListContainer";
import CarritoPage from "../pages/CarritoPage";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/productos" element={<ProductosPages />} />
      <Route path="/productos/:tipo" element={<ItemListContainer />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/detalles/:id" element={<DetallePage />} />
      <Route path="/productos/detalles/:id" element={<DetallePage />} />
      <Route path="/productos/:tipo/detalles/:id" element={<DetallePage />} />
      <Route path="/carrito" element={<CarritoPage />} />
    </Routes>
  );
}
export default RoutesConfig;
