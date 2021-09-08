import DataTable from "components";
import Footer from "components/footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="conteiner">
        <h1 className="text-primary">Olá mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
