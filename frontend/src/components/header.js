import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    const [showLeft, setShowLeft] = useState(true);
    const [showRightTop, setShowRightTop] = useState(true);
    const [showRightBottom, setShowRightBottom] = useState(true);

    // Detectar si es mobile para ajustar el tamaño del título
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowLeft(false);
                setShowRightTop(false);
                setShowRightBottom(false);
            }
        };
        window.addEventListener('resize', handleResize);
        // Cerrar si ya está en mobile al cargar
        if (window.innerWidth <= 768) {
            setShowLeft(false);
            setShowRightTop(false);
            setShowRightBottom(false);
        }
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "110px",
                overflow: "hidden",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                zIndex: 100,
            }}
        >
            <img
                src={"/assets/banner.png"}
                alt="Banner"
                style={{
                    width: "100%",
                    height: "110px",
                    objectFit: "cover",
                    display: "block",
                    opacity: 1,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            />
            <h1
                style={{
                    margin: 0,
                    bottom: 5,
                    fontWeight: 700,
                    fontSize: isMobile ? 20 : 32,
                    letterSpacing: 1,
                    textAlign: "left",
                    color: "#fff",
                    position: "relative",
                    zIndex: 2,
                    padding: isMobile ? "16px 12px" : "24px 32px",
                    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                }}
            >Toti Diversidade | Grupo 3
            </h1>
        </header>
        {/* Alerta flotante izquierda */}
        {showLeft && (
            <div
                style={{
                    position: "fixed",
                    top: 130,
                    left: 20,
                    width: 240,
                    maxWidth: "80vw",
                    zIndex: 101,
                    borderRadius: 16,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                    background: "#fff",
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <button
                    onClick={() => setShowLeft(false)}
                    style={{
                        position: 'absolute',
                        top: 4,
                        right: 8,
                        background: 'rgba(0,0,0,0.4)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: 28,
                        height: 28,
                        fontSize: 18,
                        cursor: 'pointer',
                        zIndex: 2
                    }}
                    aria-label="Fechar alerta esquerda"
                >×</button>
                <Link to="/ofertas" style={{display: 'block'}}>
                    <img
                        src={"/assets/descontos.jpeg"}
                        alt="Descontos"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 16,
                            display: 'block',
                        }}
                    />
                </Link>
            </div>
        )}
        {/* Alerta flotante derecha superior */}
        {showRightTop && (
            <div
                style={{
                    position: "fixed",
                    top: 130,
                    right: 20,
                    width: 240,
                    maxWidth: "80vw",
                    zIndex: 101,
                    borderRadius: 16,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                    background: "#fff",
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <button
                    onClick={() => setShowRightTop(false)}
                    style={{
                        position: 'absolute',
                        top: 4,
                        right: 8,
                        background: 'rgba(0,0,0,0.4)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: 28,
                        height: 28,
                        fontSize: 18,
                        cursor: 'pointer',
                        zIndex: 2
                    }}
                    aria-label="Fechar alerta direita superior"
                >×</button>
                <Link to="/pages/subpages/TrabalheConosco" style={{display: 'block'}}>
                    <img
                        src={"/assets/ninja.jpeg"}
                        alt="Pré-venda"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 16,
                            display: 'block',
                        }}
                    />
                </Link>
            </div>
        )}
        {/* Alerta flotante derecha inferior */}
        {showRightBottom && (
            <div
                style={{
                    position: "fixed",
                    top: 300,
                    right: 20,
                    width: 240,
                    maxWidth: "80vw",
                    zIndex: 101,
                    borderRadius: 16,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                    background: "#fff",
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <button
                    onClick={() => setShowRightBottom(false)}
                    style={{
                        position: 'absolute',
                        top: 4,
                        right: 8,
                        background: 'rgba(0,0,0,0.4)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: 28,
                        height: 28,
                        fontSize: 18,
                        cursor: 'pointer',
                        zIndex: 2
                    }}
                    aria-label="Fechar alerta direita inferior"
                >×</button>
                <Link to="/ofertas" style={{display: 'block'}}>
                    <img
                        src={"/assets/pre-venta.jpeg"}
                        alt="Pré-venda"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 16,
                            display: 'block',
                        }}
                    />
                </Link>
            </div>
        )}
        </>
    );
}
export default Header;
