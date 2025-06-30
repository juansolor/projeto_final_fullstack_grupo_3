const express = require('express');
const router = express.Router();
const db = require('../../models');
const Pedido = db.Pedido;
const Usuario = db.Usuario;

// GET /api/pedidos/:usuarioId - lista pedidos de um usuário
router.get('/:usuarioId', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      where: { usuarioId: req.params.usuarioId },
      order: [['data', 'DESC']],
    });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos do usuário' });
  }
});

module.exports = router;
