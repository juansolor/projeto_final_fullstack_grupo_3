import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function dropdownMenu(handlePageChange) {
  return (
    <ul className="dropdown-menu">
      <li><button className="dropdown-item" onClick={() => handlePageChange('/perifericos')}>Perifericos</button></li>
      <li><button className="dropdown-item" onClick={() => handlePageChange('/notebook')}>Notebook</button></li>
      <li><button className="dropdown-item" onClick={() => handlePageChange('/computador-escritorio')}>Computador escritorio</button></li>
      <li><hr className="dropdown-divider" /></li>
      <li><button className="dropdown-item" onClick={() => handlePageChange('/outra-pagina')}>Something else here</button></li>
    </ul>
  );
}


const Navbar = () => {
  const [pagina, setPagina] = useState('/');
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setPagina(page);
    navigate(page);
  };

  // Estado para controlar si el dropdown está abierto
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Función para alternar el estado del dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
<nav className="navbar navbar-expand-lg navbar-custom fixed-top shadow">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active btn btn-link" style={{textDecoration: 'none', color: '#8439CC', fontWeight: 700, fontSize: 18}} onClick={() => handlePageChange('/')}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" style={{textDecoration: 'none', color: '#3FD37D', fontWeight: 700, fontSize: 18}} onClick={() => handlePageChange('/ofertas')}>Ofertas</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" style={{textDecoration: 'none', color: '#8439CC', fontWeight: 700, fontSize: 18}} onClick={() => handlePageChange('/pages/subpages/Lojas')}>Lojas</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" style={{textDecoration: 'none', color: '#3FD37D', fontWeight: 700, fontSize: 18}} onClick={() => handlePageChange('/pages/subpages/Atendimento')}>Atendimento</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" style={{textDecoration: 'none', color: '#8439CC', fontWeight: 700, fontSize: 18}} onClick={() => handlePageChange('/pages/subpages/TrabalheConosco')}>Trabalhe Conosco</button>
        </li>
      </ul>
      <div className="d-flex align-items-center gap-2">
        <button
          className="nav-link active btn btn-link btn-carrinho"
          style={{textDecoration: 'none', fontWeight: 700, fontSize: 16, background: '#8439CC', color: '#8439CC', borderRadius: 8, padding: '6px 18px', transition: 'background 0.2s'}}
          onClick={() => handlePageChange('/carrinho')}
        >
          carrinho
        </button>
        <button
          className="nav-link active btn btn-link btn-user"
          style={{textDecoration: 'none', fontWeight: 700, fontSize: 16, background: '#8439CC', color: '#3FD37D', borderRadius: 8, padding: '6px 18px', transition: 'background 0.2s'}}
          onClick={() => handlePageChange('/user')}
        >
          user
        </button>
        <form className="d-flex ms-2" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <style>{`
        .btn-carrinho, .btn-user {
          color: #fff !important;
        }
        .btn-carrinho:hover, .btn-user:hover {
          background: #6a2ca6 !important;
          color: #fff !important;
        }
      `}</style>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
