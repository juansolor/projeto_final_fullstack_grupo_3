import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UsuarioForm({ onSave, editingUser, onCancel }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comportamento, setComportamento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (editingUser) {
      setNome(editingUser.nome);
      setEmail(editingUser.email);
      setComportamento(editingUser.comportamento || '');
      setEndereco(editingUser.endereco || '');
      setCep(editingUser.cep || '');
      setTelefone(editingUser.telefone || '');
      setPassword(editingUser.password || '');
      setConfirmPassword(editingUser.password || ''); // Set confirm password as well
    } else {
      setNome('');
      setEmail('');
      setComportamento('');
      setEndereco('');
      setCep('');
      setTelefone('');
      setPassword('');
      setConfirmPassword('');
    }
  }, [editingUser]);
  // Cambia el nombre de la función interna para evitar conflicto con la prop
  function handleSave(user) {
    const newUser = {
      ...user,
      nome,
      email,
      comportamento,
      endereco,
      cep,
      telefone,
      password // Asegúrate de que el campo password esté presente en tu modelo
    };
    if (typeof onSave === 'function') {
      onSave(newUser);
    }
    setNome('');
    setEmail('');
    setComportamento('');
    setEndereco('');
    setCep('');
    setTelefone('');
    setPassword('');
  }

  // Asegúrate de que los nombres de los campos coincidan con los del modelo User en tu backend.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Ajusta os nomes das propriedades segundo o esquema de tua base de dados
    handleSave({
      nome,           // nombre completo
      email,          // correo electrónico
      comportamento,  // comportamento (si existe en tu modelo)
      endereco,       // dirección
      cep,            // código postal
      telefone,       // teléfono
      password        // contraseña (si é necesario)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-light shadow-sm">
      <h2 className="mb-3">{editingUser ? 'Editar Usuário' : 'Criar Usuário'}</h2>
      <div className="mb-3">
        <label className="form-label">Nome Completo:</label>
        <input
          type="text"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Endereço:</label>
        <input
          type="text"
          className="form-control"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">CEP:</label>
        <input
          type="text"
          className="form-control"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Telefone:</label>
        <input
          type="text"
          className="form-control"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-text text-muted">
          Use uma senha forte:
          <ul className="mb-0">
            <li>Pelo menos 8 caracteres</li>
            <li>Letras maiúsculas (A-Z)</li>
            <li>Letras minúsculas (a-z)</li>
            <li>Números (0-9)</li>
            <li>Símbolos (ex: !@#$%^&amp;*)</li>
          </ul>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Confirmar Password:</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary me-2"
        disabled={editingUser}
      >
        Salvar
      </button>
      <button
        type="button"
        className="btn btn-success me-2"
        disabled={!editingUser}
        onClick={() => handleSave({ nome, email, endereco, cep, telefone })}
      >
        Atualizar
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onCancel}
      >
        Cancelar
      </button>
      <div className="mt-3 text-center">
        <p>Ou cadastre-se com:</p>
        <button className="btn w-100 mb-2" style={{ backgroundColor: '#DB4437', color: 'white' }}>
          <i className="bi bi-google me-2"></i> Cadastrar com Gmail
        </button>
        <button className="btn w-100" style={{ backgroundColor: '#4267B2', color: 'white' }}>
          <i className="bi bi-facebook me-2"></i> Cadastrar com Facebook
        </button>
      </div>
    </form>
  );
}
