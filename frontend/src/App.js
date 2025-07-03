import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import OfertasPage from './pages/OfertasPage';
import ProdutoPage from './pages/ProdutoPage';
import HistoricoCompras from './pages/HistoricoCompras';
import Carrinho from './pages/carrinho';

// Subpages
import Atendimento from './pages/subpages/Atendimento';
import TrabalheConosco from './pages/subpages/TrabalheConosco';
import Lojas from './pages/subpages/Lojas';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/offers" element={<OfertasPage />} />
          <Route path="/product/:id" element={<ProdutoPage />} />
          <Route path="/historico-compras" element={<HistoricoCompras />} />
          <Route path="/carrinho" element={<Carrinho />} />

          {/* Subpages */}
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/lojas" element={<Lojas />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;