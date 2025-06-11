import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/user");
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
              const response = await fetch("http://localhost:3001/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
              });
              if (!response.ok) {
                throw new Error("Login failed");
              }
              const data = await response.json();
              alert("Login successful!");
              // Optionally, redirect or store token here
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
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Bem-vindo, {user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Mostrar el botón solo si el usuario es admin */}
      {user.role === "admin" && (
        <div className="mt-3 text-center">
          <Link to="/SuperUser" className="btn btn-warning">
            Painel do Super Usuário
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
