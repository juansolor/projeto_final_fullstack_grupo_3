import UsuariosChart from './components/UsuariosChart';
import UsuariosList from './components/UsuariosList';
import UsuarioForm from './pages/Registro';

const adminuser = ({ setPage }) => {
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
    <>
      <h1>Home</h1>
      <UsuariosChart />
      <UsuariosList setPage={setPage} />
      <UsuarioForm onSave={handleSaveUser} />
    </>
  );
};

export default adminuser;
