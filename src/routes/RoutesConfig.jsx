import { Routes, Route } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import ProductosPages from "../pages/ProductosPage";
import NosotrosPage from "../pages/NosotrosPage";
import DetallePage from "../pages/DetallePage";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/productos" element={<ProductosPages />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/detalles/:id" element={<DetallePage />} />
    </Routes>
  );
}
export default RoutesConfig;
