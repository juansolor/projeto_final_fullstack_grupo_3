import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function UsuarioForm({ onSave, editingUser, onCancel }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comportamento, setComportamento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    if (editingUser) {
      setNome(editingUser.nome);
      setEmail(editingUser.email);
      setComportamento(editingUser.comportamento || '');
      setEndereco(editingUser.endereco || '');
      setCep(editingUser.cep || '');
      setTelefone(editingUser.telefone || '');
    } else {
      setNome('');
      setEmail('');
      setComportamento('');
      setEndereco('');
      setCep('');
      setTelefone('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nome, email, comportamento, endereco, cep, telefone });
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
        onClick={() => onSave({ nome, email, endereco, cep, telefone })}
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
    </form>
  );
}
