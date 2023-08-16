import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";

// COMPONENTS

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
