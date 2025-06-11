const express = require('express');
const multer = require('multer');
const fs = require('fs');
const db = require('./database');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Endpoint para guardar imágenes
app.post('/upload', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    const imageData = fs.readFileSync(imagePath);

    db.run(`INSERT INTO images (name, image) VALUES (?, ?)`, [req.file.originalname, imageData], (err) => {
        if (err) return res.status(500).send('Error al guardar la imagen');
        res.send('Imagen guardada con éxito');
    });
});

// Endpoint para obtener imágenes
app.get('/images', (req, res) => {
    db.all(`SELECT id, name FROM images`, [], (err, rows) => {
        if (err) return res.status(500).send('Error al obtener imágenes');
        res.json(rows);
    });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));


