<<<<<<< HEAD

=======
>>>>>>> origin/main
const express = require('express');
const router = express.Router();
const db = require('../../models');
const Pedido = db.Pedido;
<<<<<<< HEAD

// GET /api/pedidos - lista todos os pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
});

// POST /api/pedidos - cria um novo pedido
router.post('/', async (req, res) => {
  try {
    const { userId, products, total } = req.body;
    const novoPedido = await Pedido.create({ userId, products, total });
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
=======
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
>>>>>>> origin/main
  }
});

module.exports = router;
