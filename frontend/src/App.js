import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Produtos from './pages/produto';
import Carrinho from './pages/carrinho';
import Users from './pages/user';
import Navbar from './components/navbar';
import Registros from './pages/Registro';
import Ofertas from './pages/ofertas'; 
import Footer from './components/footer';
import Header from './components/header';
import Lojas from './pages/subpages/Lojas';
import Atendimento from './pages/subpages/Atendimento';
import TrabalheConosco from './pages/subpages/TrabalheConosco';
import SuperUser from './pages/SuperUser';
import Pagamento from './pages/Pagamento';

function App() {
  return (
    <>
      <Header />
      <div className="header-placeholder"></div>
      <Navbar />
      <div style={{ height: 70 }}></div>
      <div className="container" style={{ maxWidth: 1000 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produtos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/user" element={<Users />} />
          <Route path="/registro" element={<Registros />} />
          <Route path="/pages/subpages/Lojas" element={<Lojas />} />
          <Route path="/pages/subpages/Atendimento" element={<Atendimento />} />
          <Route path="/pages/subpages/TrabalheConosco" element={<TrabalheConosco />} />
          <Route path="/SuperUser" element={<SuperUser />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
