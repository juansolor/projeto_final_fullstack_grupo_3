import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import HistoricoCompras from "./HistoricoCompras";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  useEffect(() => {
    // Intentar cargar usuario de localStorage primero
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
      return;
    }
    // Si no hay usuario en localStorage, buscar en backend
    const fetchUser = async () => {
      try {
        const userId = storedUser ? JSON.parse(storedUser).id : null;
        const response = await fetch(`${API_URL}/api/user`, {
          headers: userId ? { 'x-user-id': userId } : {}
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Si el usuario no está autenticado, muestra el formulario de login
  if (!user) {
    return (
      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4">Login</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            try {
              const response = await fetch(`${API_URL}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
              });
              if (!response.ok) {
                throw new Error("Login failed");
              }
              const data = await response.json();
              // Guardar usuario en localStorage
              localStorage.setItem("user", JSON.stringify(data));
              setUser(data);
              alert("Login successful!");
            } catch (error) {
              alert("Login failed: " + error.message);
            }
          }}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/Registro" className="btn btn-link">
            Cadastrarse
          </Link>
        </div>
        <div className="mt-3 text-center">
          <Link to="/SuperUser" className="btn btn-link">
            Painel do Super Usuário
          </Link>
        </div>
      </div>
    );
  }

  // Si el usuario está autenticado, muestra su información y el botón solo si es admin
  if (user) {
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Bem-vindo, {user.nome}!</h2>
        <button className="btn btn-danger mb-3" onClick={() => {
          localStorage.removeItem("user");
          setUser(null);
        }}>Logout</button>
        {/* Otros datos del usuario aquí */}
        <HistoricoCompras usuarioId={user.id} />
      </div>
    );
  }

  return null;
};

export default User;
