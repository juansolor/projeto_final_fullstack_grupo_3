import { Link } from "react-router-dom";
import '../pages/subpages/Atendimento.js';
import '../pages/subpages/Lojas.js';
import '../pages/subpages/TrabalheConosco.js';
import '../pages/ofertas.js';

const Header = () => {
    return (
        <header className="header-solid">
            <div className="header-content">
                <h1 className="logo">E-Commerce</h1>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ofertas">Promocoes</Link></li>
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
