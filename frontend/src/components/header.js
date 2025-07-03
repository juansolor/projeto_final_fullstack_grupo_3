import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


const Header = () => {
    return (
        <header className="header-solid">
            <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <img src={logo} alt="Logo Grupo 3" style={{ height: 56, marginRight: 16, borderRadius: 8 }} />
                <h1 className="logo" style={{ margin: 0, fontWeight: 700, fontSize: 32, color: '#fff', letterSpacing: 1, textAlign: 'left' }}>E-Commerce Toti | Grupo 3</h1>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ofertas">Promoções</Link></li>
                        <li><Link to="/pages/subpages/Lojas">Lojas</Link></li>
                        <li><Link to="/pages/subpages/Atendimento">Atendimento</Link></li>
                        <li><Link to="/pages/subpages/TrabalheConosco">Trabalhe Conosco</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
