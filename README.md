# Projeto Fullstack: E-Commerce Toti - Grupo 3

E-Commerce completo inspirado em Kabum! desenvolvido pelo Grupo 3 da Toti. Permite cadastro, listagem, edição, exclusão de produtos, upload de imagens, e um fluxo real de compra com carrinho persistente e visual moderno.

- **Backend:** Node.js, Express, Sequelize, Multer, SQLite
- **Frontend:** React, Axios, Bootstrap

---

## 🧱 Estrutura do Projeto

```
/backend
├── models/
│   ├── index.js
│   ├── Imagem.js
│   ├── Usuario.js
│   └── Carrinho.js
├── routes/
│   └── api/
│       ├── imagens.js
│       ├── upImag.js
│       ├── usuarios.js
│       └── carrinho.js
├── server.js
├── database.sqlite (criado automaticamente)
└── uploads/ (imagens enviadas)
 
/frontend
├── public/
├── src/
│   ├── components/
│   │   ├── navbar.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   └── ...
│   ├── pages/
│   │   ├── home.js
│   │   ├── produto.js
│   │   ├── carrinho.js
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

#### Endpoints principais:
- Usuários: [http://localhost:3001/api/usuarios](http://localhost:3001/api/usuarios)
- Imagens: [http://localhost:3001/api/imagens](http://localhost:3001/api/imagens)
- Carrinho: [http://localhost:3001/api/carrinho](http://localhost:3001/api/carrinho)

##### Exemplo de endpoints do carrinho:
- `GET /api/carrinho` — Lista todos os itens do carrinho
- `POST /api/carrinho` — Adiciona produto ao carrinho
- `PATCH /api/carrinho/:id` — Atualiza quantidade de um item
- `DELETE /api/carrinho/:id` — Remove item do carrinho

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
- ✅ Carrinho de compras real (CRUD) integrado ao backend
- ✅ Quantidade editável, remoção de itens e totais dinâmicos
- ✅ Fluxo de compra persistente no banco de dados
- ✅ Botão "Pagar Produto" (simulação de pagamento)
- ✅ Feedback visual moderno, navegação fluida e responsiva
- ✅ Mensagens de confirmação e alertas de erro

---

## 💡 Tecnologias Usadas

**Backend:** Node.js, Express, Sequelize, Multer, SQLite  
**Frontend:** React, Axios, Bootstrap

---

## 🎨 Experiência Visual

- Visual inspirado em Kabum! e Figma do grupo
- Carrossel dinâmico na home
- Cards de produtos destacados
- Navbar com botões separados para carrinho e usuário
- Logos de App Store e Google Play
- Layout responsivo e moderno

---

## 📦 Observações

- O fluxo de compra é totalmente funcional e persistente.
- O botão "Pagar Produto" simula o pagamento (pode ser integrado a gateways reais futuramente).
- Para produção, recomenda-se adicionar autenticação e melhorias de segurança.

---

## 👥 Grupo 3 — Toti Diversidade

Projeto desenvolvido para a formação Fullstack Toti.

---
