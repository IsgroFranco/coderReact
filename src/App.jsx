import ItemListContainer from "./components/ItemListContainer";
import MainLogo from "./components/MainLogo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <MainLogo />
      <ItemListContainer greetings="Hello World" />
    </>
  );
}

export default App;
