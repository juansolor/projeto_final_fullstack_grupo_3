const express = require('express');
const router = express.Router();
const db = require('../../models');
const Usuario = db.Usuario;

<<<<<<< HEAD
router.post('/', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    if (usuario.senha !== senha) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    res.json({ message: 'Login bem-sucedido', usuario });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

module.exports = router;
=======
// POST /api/login - autentica usuário
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha obrigatórios' });
  }
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    if (usuario.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
    // Não retornar a senha
    const { password: _, ...userData } = usuario.toJSON();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao autenticar usuário' });
  }
});

module.exports = router;
>>>>>>> origin/main
