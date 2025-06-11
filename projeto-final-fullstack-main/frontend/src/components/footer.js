import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer-horizontal">
            <div className="footer-content">
                <img src={logo} alt="Logo" style={{ width: "30px", height: "auto" }} />
                <p>&copy; 2023 My Website</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={{ color: "#fff" }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{ color: "#fff" }}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ color: "#fff" }}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#fff" }}
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#fff" }}
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h3>Atendimento</h3>
                    <ul>
                        <li>Meus pedidos</li>
                        <li>Central de atendimento</li>
                        <li>Fale conosco</li>
                    </ul>
                </div>
                <div>
                    <h3>Institucional</h3>
                    <ul>
                        <li>Quem somos</li>
                        <li>Nossas lojas</li>
                        <li>Trabalhe conosco Aplicativo Grupo 3</li>
                        <li>Imprensa Blog Grupo 3</li>
                    </ul>
                </div>
                <div>
                    <h3>Políticas Grupo 3</h3>
                    <ul>
                        <li>Políticas de Trocas</li>
                        <li>Política de Devoluções</li>
                        <li>Políticas de Privacidade</li>
                        <li>Termos de Uso</li>
                        <li>Políticas de Diversidade</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
