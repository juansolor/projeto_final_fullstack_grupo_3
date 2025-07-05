const db = require('./models');
const Produto = db.Produto;

async function addFreeShippingProducts() {
  try {
    await db.sequelize.sync({ alter: true }); // Ensure the new column is added

    const productsToAdd = [
      {
        name: 'Monitor Gamer Ultra',
        description: 'Monitor de alta performance para jogos, 144Hz.',
        image: 'http://localhost:3001/uploads/logo/logo.png', // Placeholder image
        price: 1200.00,
        desconto: '10%',
        stars: 5,
        details: 'Tela IPS, 1ms de resposta, FreeSync.',
        info: 'Ideal para e-sports.',
        nome: 'Monitor',
        freeShipping: true
      },
      {
        name: 'Teclado Mecânico RGB',
        description: 'Teclado mecânico com switches Cherry MX e iluminação RGB.',
        image: 'http://localhost:3001/uploads/logo/logo.png', // Placeholder image
        price: 350.00,
        desconto: '5%',
        stars: 4,
        details: 'Layout ABNT2, anti-ghosting, software personalizável.',
        info: 'Durabilidade e estilo para seu setup.',
        nome: 'Teclado',
        freeShipping: true
      },
      {
        name: 'Mouse Gamer Ergonômico',
        description: 'Mouse com sensor óptico de alta precisão e design ergonômico.',
        image: 'http://localhost:3001/uploads/logo/logo.png', // Placeholder image
        price: 180.00,
        desconto: '0%',
        stars: 4,
        details: 'DPI ajustável, botões programáveis, iluminação LED.',
        info: 'Conforto para longas sessões de jogo.',
        nome: 'Mouse',
        freeShipping: true
      }
    ];

    for (const productData of productsToAdd) {
      const [product, created] = await Produto.findOrCreate({
        where: { name: productData.name },
        defaults: productData
      });
      if (created) {
        console.log(`Produto '${product.name}' adicionado com sucesso.`);
      } else {
        console.log(`Produto '${product.name}' já existe.`);
      }
    }

    console.log('Produtos com frete grátis adicionados/verificados com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar produtos com frete grátis:', error);
  } finally {
    process.exit();
  }
}

addFreeShippingProducts();
