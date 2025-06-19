const express = require('express');
const router = express.Router();
const db = require('../../models');
const Carrinho = db.Carrinho;

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

module.exports = router;
