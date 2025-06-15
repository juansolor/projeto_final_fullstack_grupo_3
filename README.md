# Projeto Fullstack: E-Commerce Toti - Grupo 3

Este projeto é um sistema fullstack que permite cadastrar, listar, editar, excluir produtos com upload de imagens. Ele foi desenvolvido com:

- **Backend:** Node.js, Express, Sequelize, Multer e SQLite
- **Frontend:** React, Axios e Bootstrap

---

## 🧱 Estrutura do Projeto

```
/backend
├── models/
│   ├── index.js
│   ├── Imagem.js
│   └── Usuario.js
├── routes/
│   └── api/
│       ├── imagens.js
│       ├── upImag.js
│       └── usuarios.js
├── server.js
├── database.sqlite (criado automaticamente)
└── uploads/ (imagens enviadas)
 
/frontend
├── public/
├── src/
│   ├── components/
│   │   ├── navbar.js
│   │   ├── footer.js
│   │   └── header.js
│   ├── pages/
│   │   ├── home.js
│   │   ├── produto.js
│   │   ├── ofertas.js
│   │   ├── user.js
│   │   ├── SuperUser.js
│   │   └── subpages/
│   │       ├── Atendimento.js
│   │       ├── Lojas.js
│   │       └── TrabalheConosco.js
│   └── App.js
└── package.json
```

---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/juansolor/projeto_final_fullstack_grupo_3.git
cd projeto_final_fullstack_grupo_3
```

### 2. Backend (Node.js + Express + Sequelize + Multer)

```bash
cd backend
npm install
```

#### Principais dependências:
- **Express**: framework para APIs REST
- **Sequelize**: ORM para SQLite
- **Sqlite3**: driver para SQLite
- **Multer**: upload de arquivos
- **Cors**: permite requisições do frontend

### 3. Rode o servidor backend

```bash
node server.js
```

Acesse: [http://localhost:3001/](http://localhost:3001/)  
Você verá: `API rodando com sucesso!`

- Usuários: [http://localhost:3001/api/usuarios](http://localhost:3001/api/usuarios)
- Imagens: [http://localhost:3001/api/imagens](http://localhost:3001/api/imagens)

---

### 4. Frontend (React + Axios + Bootstrap)

```bash
cd ../frontend
npm install
npm start
```

Acesse: [http://localhost:3000/](http://localhost:3000/)

---

## 🔄 Funcionalidades

- ✅ Cadastro, listagem, edição e exclusão de produtos
- ✅ Upload e listagem de imagens de produtos
- ✅ Interface moderna com React e Bootstrap

---

## 💡 Tecnologias Usadas

**Backend:** Node.js, Express, Sequelize, Multer, SQLite  
**Frontend:** React, Axios, Bootstrap

---
