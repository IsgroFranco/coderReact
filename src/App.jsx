import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";

// COMPONENTS

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <Router>
          <Navbar />
          <RoutesConfig />
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
