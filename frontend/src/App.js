import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Produtos from './pages/produto';
import Carrinho from './pages/carrinho';
import Users from './pages/user';

import Registros from './pages/Registro';
import Ofertas from './pages/ofertas'; 
import Footer from './components/footer';
import Header from './components/header';
import LojasProximity from './pages/LojasProximity';
import Atendimento from './pages/subpages/Atendimento';
import TrabalheConosco from './pages/subpages/TrabalheConosco';
import SuperUser from './pages/SuperUser';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <>
      <Header />
      
      

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produtos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/user" element={<Users />} />
          <Route path="/registro" element={<Registros />} />
          <Route path="/lojas" element={<LojasProximity />} />
          <Route path="/pages/subpages/Atendimento" element={<Atendimento />} />
          <Route path="/pages/subpages/TrabalheConosco" element={<TrabalheConosco />} />
          <Route path="/SuperUser" element={<SuperUser />} />
          <Route path="/pagamento" element={<PaymentPage />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;