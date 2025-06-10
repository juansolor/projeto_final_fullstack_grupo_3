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

function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: 70 }}></div>
      <div className="container" style={{ maxWidth: 1000 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produtos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/user" element={<Users />} />
          <Route path="/registro" element={<Registros />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </>
  );
}

export default App;
