import UsuariosChart from './components/UsuariosChart';
import UsuariosList from './components/UsuariosList';
import UsuarioForm from './pages/Registro';

const adminuser = ({ setPage }) => {
  return (
    <>
      <h1>Home</h1>
      <UsuariosChart />
      <UsuariosList setPage={setPage} />
      <UsuarioForm />
    </>
  );
};

export default adminuser;
