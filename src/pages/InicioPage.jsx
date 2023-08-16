import ItemListContainer from "../components/ItemListContainer";
import MainLogo from "../components/MainLogo";

function InicioPage() {
  return (
    <section>
      <MainLogo />
      <ItemListContainer isTitle="Productos Destacados" />
    </section>
  );
}
export default InicioPage;
