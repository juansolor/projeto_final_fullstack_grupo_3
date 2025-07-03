
const express = require('express');
const router = express.Router();
const db = require('../../models');
const Pedido = db.Pedido;

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
  }
});

module.exports = router;
