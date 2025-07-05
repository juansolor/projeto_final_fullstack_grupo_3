const express = require('express');
const router = express.Router();
const db = require('../../models');
const Carrinho = db.Carrinho;
const Pedido = db.Pedido;
const axios = require('axios');
const API_URL = process.env.API_URL || 'http://localhost:3000';

// GET /api/carrinho - lista todos os produtos do carrinho
router.get('/', async (req, res) => {
  try {
    const itens = await Carrinho.findAll();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carrinho' });
  }
});

// POST /api/carrinho - adiciona produto ao carrinho
router.post('/', async (req, res) => {
  try {
    const { title, img, preco, quantidade } = req.body;
    // Se já existe, só incrementa quantidade
    let item = await Carrinho.findOne({ where: { title } });
    if (item) {
      item.quantidade += quantidade || 1;
      await item.save();
      return res.status(200).json(item);
    }
    const novo = await Carrinho.create({ title, img, preco, quantidade: quantidade || 1 });
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar ao carrinho' });
  }
});

// PATCH /api/carrinho/:id - atualiza quantidade
router.patch('/:id', async (req, res) => {
  try {
    const { quantidade } = req.body;
    const item = await Carrinho.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Produto não encontrado' });
    item.quantidade = quantidade;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar quantidade' });
  }
});

// DELETE /api/carrinho/:id - remove produto do carrinho
router.delete('/:id', async (req, res) => {
  try {
    const item = await Carrinho.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Produto não encontrado' });
    await item.destroy();
    res.json({ message: 'Produto removido do carrinho' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// DELETE /api/carrinho - remove todos os produtos do carrinho
router.delete('/', async (req, res) => {
  try {
    await Carrinho.destroy({ where: {} });
    res.json({ message: 'Carrinho esvaziado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao esvaziar carrinho' });
  }
});

// POST /api/carrinho/checkout - finalizar compra
// Espera req.user.id (usuário autenticado)
router.post('/checkout', async (req, res) => {
  try {
    const usuarioId = req.user?.id || req.body.usuarioId; // fallback para body se não houver auth middleware
    if (!usuarioId) {
      return res.status(400).json({ error: 'Usuário não autenticado' });
    }
    // Busca todos os itens do carrinho
    const itens = await Carrinho.findAll();
    if (!itens || itens.length === 0) {
      return res.status(400).json({ error: 'Carrinho vazio' });
    }
    // Calcula o total
    const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    // Cria o pedido
    const pedido = await Pedido.create({
      produtos: itens.map(item => item.toJSON()),
      total,
      usuarioId,
    });
    // Não limpa mais o carrinho aqui, isso é feito via DELETE /api/carrinho após pagamento
    res.status(201).json({ message: 'Compra finalizada com sucesso', pedido });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao finalizar compra' });
  }
});

module.exports = router;
