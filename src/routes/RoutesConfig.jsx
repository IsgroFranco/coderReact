import { Routes, Route } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import ProductosPages from "../pages/ProductosPage";
import NosotrosPage from "../pages/NosotrosPage";
import DetallePage from "../pages/DetallePage";
import ItemListContainer from "../components/ItemListContainer";
import CarritoPage from "../pages/CarritoPage";
import Checkout from "../pages/CheckOut";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/productos" element={<ProductosPages />} />
      <Route path="/productos/:category" element={<ItemListContainer />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/detalles/:id" element={<DetallePage />} />
      <Route path="/productos/detalles/:id" element={<DetallePage />} />
      <Route
        path="/productos/:category/detalles/:id"
        element={<DetallePage />}
      />
      <Route path="/carrito" element={<CarritoPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
export default RoutesConfig;
