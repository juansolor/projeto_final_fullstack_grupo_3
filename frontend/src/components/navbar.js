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
    <Link className="navbar-brand" to="/">E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active btn btn-link" style={{textDecoration: 'none'}} onClick={() => handlePageChange('/')}>home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active btn btn-link" style={{textDecoration: 'none'}} onClick={() => handlePageChange('/produto')}>Produtos</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-link" style={{textDecoration: 'none'}} onClick={() => handlePageChange('/ofertas')}>Ofertas do Dia</button>
        </li>
        <li className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle btn btn-link"
            style={{textDecoration: 'none'}}
            data-bs-toggle="dropdown"
            aria-expanded={dropdownOpen}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            Categorias
          </button>
          {dropdownOpen && dropdownMenu(handlePageChange)}
        </li>
        <li className="nav-item">
          <button className="nav-link active btn btn-link" style={{textDecoration: 'none'}} onClick={() => handlePageChange('/carrinho')}>carrinho</button>
        </li>
        <li className="nav-item">
          <button className="nav-link active btn btn-link" style={{textDecoration: 'none'}} onClick={() => handlePageChange('/user')}>user</button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
