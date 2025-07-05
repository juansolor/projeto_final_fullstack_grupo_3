import React from 'react';
import UsuarioForm from './Registro';

export default function Registro() {
  // Función para guardar usuario en el backend
  const handleSaveUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (!response.ok) throw new Error('Erro ao criar usuário');
      alert('Usuário criado com sucesso!');
    } catch (err) {
      alert('Erro ao criar usuário');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <UsuarioForm onSave={handleSaveUser} />
        </div>
      </div>
    </div>
  );
}
