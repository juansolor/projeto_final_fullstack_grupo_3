const express = require('express');
const router = express.Router();
<<<<<<< HEAD

// Add user-related routes here

module.exports = router;
=======
const db = require('../../models');
const Usuario = db.Usuario;

// GET /api/user - retorna o usuário autenticado a partir do token (simples, sem JWT)
router.get('/', async (req, res) => {
  // Busca o id do usuário do header (exemplo simples, não seguro para produção)
  const userId = req.headers['x-user-id'];
  if (!userId) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }
  try {
    const usuario = await Usuario.findByPk(userId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    const { password, ...userData } = usuario.toJSON();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

module.exports = router;
>>>>>>> origin/main
