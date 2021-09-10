import DataTable from "components";
import BarChrt from "components/BarChart";
import DonutChrt from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="conteiner">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucessos (%)</h5>
                        <BarChrt />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas Vendas</h5>
                        <DonutChrt />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary"> Todas as Vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;