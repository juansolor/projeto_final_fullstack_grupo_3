const express = require('express');
const router = express.Router();
const db = require('../../models');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Rota para upload de imagem
router.post('/upload', upload.single('imagem'), async (req, res) => {
  try {
    const { nome, valor, categoria, isOferta } = req.body;
    const imagemUrl = req.file ? req.file.path : null;

    if (!imagemUrl) {
      return res.status(400).json({ error: 'Imagem não enviada.' });
    }

    const novaImagem = await db.Imagem.create({
      nome,
      valor,
      categoria,
      isOferta: isOferta === 'true' || isOferta === true,
      imagemUrl,
    });

    res.status(201).json(novaImagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para listar imagens
router.get('/', async (req, res) => {
  try {
    const imagens = await db.Imagem.findAll();
    res.json(imagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;