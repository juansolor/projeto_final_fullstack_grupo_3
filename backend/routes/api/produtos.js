const express = require('express');
const router = express.Router();
const db = require('../../models');
const Produto = db.Produto;

// GET /api/produtos - lista todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// POST /api/produtos - cria um novo produto
router.post('/', async (req, res) => {
  try {
    const { name, description, image, price, promotionalPrice } = req.body;
    const novoProduto = await Produto.create({ name, description, image, price, promotionalPrice });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// GET /api/produtos/:id - busca um produto por id
router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// PUT /api/produtos/:id - atualiza um produto
router.put('/:id', async (req, res) => {
  try {
    const { name, description, image, price, promotionalPrice } = req.body;
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
    await produto.update({ name, description, image, price, promotionalPrice });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// DELETE /api/produtos/:id - remove um produto
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
    await produto.destroy();
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover produto' });
  }
});

module.exports = router;