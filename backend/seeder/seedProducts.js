const db = require('../models');

const allProducts = [
  {
    name: 'PC Gamer Skill Aquarium SKA005',
    image: '/uploads/produtos/pcgamer-skillaquarium-ska005.webp',
    description: 'PC Gamer Skill Aquarium com AMD Ryzen 7 5700G, 16GB 3200MHz, Radeon Vega 8, SSD 512GB M.2, Fonte 500w, Preto.',
    price: 5999,
    stars: 5,
    category: 'PC Gamer',
    brand: 'Skill'
  },
  {
    name: 'PC Gamer Skill Aquarium SKA003',
    image: '/uploads/produtos/pcgamer-skillaquarium-ska003.webp',
    description: 'PC Gamer Skill Aquarium com AMD Ryzen 5 5600G, 16GB 3200MHz, Radeon Vega 7, SSD 512GB M.2, Fonte 500w, Preto.',
    price: 4999,
    stars: 4,
    category: 'PC Gamer',
    brand: 'Skill'
  },
  {
    name: 'PC Gamer Completo Skill RGB',
    image: '/uploads/produtos/pcgamer-skill-rgb.webp',
    description: 'PC Gamer completo Skill RGB com AMD Ryzen 5, componentes de alta performance para jogos.',
    price: 6499,
    stars: 5,
    category: 'PC Gamer',
    brand: 'Skill'
  },
  {
    name: 'Monitor AOC 22B35HM2 100Hz Full HD',
    image: '/uploads/produtos/Mon.jpg',
    description: 'Monitor AOC 22B35HM2 21.5" Full HD WideScreen, 100Hz, 1ms de resposta.',
    price: 899,
    stars: 4,
    category: 'Monitor',
    brand: 'AOC'
  },
  {
    name: 'Monitor BRX Office 20LED 75Hz',
    image: '/uploads/produtos/Monitor.jpg',
    description: 'Monitor BRX Office 20" LED WideScreen, 75Hz, 5ms, HDMI e VGA.',
    price: 599,
    stars: 3,
    category: 'Monitor',
    brand: 'BRX'
  },
  {
    name: 'Monitor BRX',
    image: '/uploads/produtos/Monitor1.webp',
    description: 'Monitor BRX Office 20" LED WideScreen, 75Hz, 5ms, HDMI e VGA.',
    price: 800,
    stars: 3,
    category: 'Monitor',
    brand: 'BRX'
  },
  {
    name: 'Monitor BRX Office 20LED 75Hz',
    image: '/uploads/produtos/Monitor2.webp',
    description: 'Monitor BRX Office 20" LED WideScreen, 75Hz, 5ms, HDMI e VGA.',
    price: 800,
    stars: 3,
    category: 'Monitor',
    brand: 'BRX'
  },
  {
    name: 'Monitor BRX',
    image: '/uploads/produtos/Monitor12.webp',
    description: 'Monitor BRX Office 20" LED WideScreen, 75Hz, 5ms, HDMI e VGA.',
    price: 800,
    stars: 3,
    category: 'Monitor',
    brand: 'BRX'
  },
  {
    name: 'Notebook Acer Aspire A15-51M-54E6',
    image: '/uploads/produtos/notebook1.webp',
    description: 'Notebook Acer Aspire A15-51M-54E6 com Intel Core i5 13ª geração, 8GB RAM, 512GB SSD, Windows 11 Home, tela 15.6".',
    price: 3999,
    stars: 4,
    category: 'Notebook',
    brand: 'Acer'
  },
  {
    name: 'Notebook Dell Inspiron I15I120KA35P',
    image: '/uploads/produtos/notebook12.jpg',
    description: 'Notebook Dell Inspiron 15 com Intel Core, configurações robustas para uso diário e profissional.',
    price: 4299,
    stars: 4,
    category: 'Notebook',
    brand: 'Dell'
  },
  {
    name: 'Notebook Acer Aspire 5 A515-57-56SJ',
    image: '/uploads/produtos/notebook13.jpg',
    description: 'Notebook Acer Aspire 5 com Intel Core i5 12450H, 8GB RAM, 512GB SSD, Windows 11, tela 15.6" Full HD.',
    price: 3799,
    stars: 4,
    category: 'Notebook',
    brand: 'Acer'
  },
  {
    name: 'Notebook Lenovo IdeaPad 1i 15IAU7',
    image: '/uploads/produtos/notebook15.webp',
    description: 'Notebook Lenovo IdeaPad 1i com Intel Core i5, 8GB RAM, SSD 512GB, Windows 11, tela 15.6".',
    price: 3699,
    stars: 4,
    category: 'Notebook',
    brand: 'Lenovo'
  },
  {
    name: 'Notebook Lenovo LOQ-e 15IAX9E',
    image: '/uploads/produtos/notebook17.jpg',
    description: 'Notebook Lenovo LOQ-e 15IAX9E focado em performance para gamers e criadores de conteúdo.',
    price: 5299,
    stars: 5,
    category: 'Notebook',
    brand: 'Lenovo'
  },
  {
    name: 'Notebook Lenovo IdeaPad',
    image: '/uploads/produtos/notebook18.jpg',
    description: 'Notebook Lenovo IdeaPad ideal para uso cotidiano e produtividade.',
    price: 3299,
    stars: 3,
    category: 'Notebook',
    brand: 'Lenovo'
  },
  {
    name: 'Notebook ASUS TUF Gaming',
    image: '/uploads/produtos/notebook21.webp',
    description: 'Notebook ASUS TUF Gaming com hardware robusto para jogos e produtividade.',
    price: 5899,
    stars: 5,
    category: 'Notebook',
    brand: 'ASUS'
  },
  {
    name: 'Notebook Acer Nitro V15',
    image: '/uploads/produtos/notebook145.webp',
    description: 'Notebook Acer Nitro V15 para gamers, com hardware potente e design moderno.',
    price: 5499,
    stars: 5,
    category: 'Notebook',
    brand: 'Acer'
  },
  {
    name: 'Auragear-logo',
    image: '/uploads/assets/Auragear-logo.jpg',
    description: 'Fone de ouvido Bluetooth com cancelamento de ruído.',
    price: 4999,
    stars: 5,
    category: 'Acessório',
    brand: 'Auragear'
  },
  {
    name: 'Auragear-produto2',
    image: '/uploads/assets/Auragear-produto2.jpg',
    description: 'Teclado mecânico RGB de alto desempenho.',
    price: 350,
    stars: 4,
    category: 'Acessório',
    brand: 'Auragear'
  },
  {
    name: 'Auragear-produto3',
    image: '/uploads/assets/Auragear-produto3.jpg',
    description: 'Mouse gamer de alta precisão.',
    price: 250,
    stars: 4,
    category: 'Mouse',
    brand: 'Auragear'
  },
  {
    name: 'Aureagerar-produto1',
    image: '/uploads/assets/Aureagerar-produto1.jpg',
    description: 'Headset com som surround 7.1.',
    price: 399,
    stars: 4,
    category: 'Periférico',
    brand: 'Aureagerar'
  },
  {
    name: 'Byteware-produto1',
    image: '/uploads/assets/Byteware-produto1.jpg',
    description: 'Monitor gamer 27" QHD 144Hz.',
    price: 1399,
    stars: 5,
    category: 'Monitor',
    brand: 'Byteware'
  },
  {
    name: 'Byteware-produto2',
    image: '/uploads/assets/Byteware-produto2.jpg',
    description: 'SSD NVMe 1TB com alta velocidade.',
    price: 599,
    stars: 4,
    category: 'Armazenamento',
    brand: 'Byteware'
  },
  {
    name: 'Byteware-produto3',
    image: '/uploads/assets/Byteware-produto3.jpg',
    description: 'Gabinete mid tower com vidro temperado.',
    price: 450,
    stars: 4,
    category: 'Acessório',
    brand: 'Byteware'
  },
  {
    name: 'Bytewave - logo',
    image: '/uploads/assets/Bytewave - logo.jpg',
    description: 'Bytewave',
    price: 3899,
    stars: 4,
    category: 'Acessório',
    brand: 'Bytewave'
  },
  {
    name: 'e-commerce',
    image: '/uploads/assets/e-commerce.jpg',
    description: 'Mini PC compacto para escritório.',
    price: 1999,
    stars: 3,
    category: 'Acessório',
    brand: 'Genérico'
  },
  {
    name: 'gamerlink-logo',
    image: '/uploads/assets/gamerlink-logo.jpg',
    description: 'Cadeira gamer ergonômica com reclínio.',
    price: 999,
    stars: 4,
    category: 'Acessório',
    brand: 'Gamerlink'
  },
  {
    name: 'gamerlink-produto',
    image: '/uploads/assets/gamerlink-produto.jpg',
    description: 'Webcam HD com microfone embutido.',
    price: 250,
    stars: 3,
    category: 'Periférico',
    brand: 'Gamerlink'
  },
  {
    name: 'logo',
    image: '/uploads/assets/logo.png',
    description: 'Hub USB 3.0 com 4 portas.',
    price: 80,
    stars: 4,
    category: 'Acessório',
    brand: 'Universal'
  },
  {
    name: 'NexaCore - logo',
    image: '/uploads/assets/NexaCore - logo.jpg',
    description: 'Notebook premium para criadores.',
    price: 5999,
    stars: 5,
    category: 'Acessório',
    brand: 'NexaCore'
  },
  {
    name: 'NexaCore - produto1',
    image: '/uploads/assets/NexaCore - produto1.jpg',
    description: 'Dock station USB-C para laptops.',
    price: 299,
    stars: 4,
    category: 'mouse',
    brand: 'NexaCore'
  },
  {
    name: 'NexaCore - produto2',
    image: '/uploads/assets/NexaCore - produto2.jpg',
    description: 'Controle Bluetooth para jogos mobile.',
    price: 199,
    stars: 3,
    category: 'Periférico',
    brand: 'NexaCore'
  },
  {
    name: 'NexaCore-produto3',
    image: '/uploads/assets/NexaCore-produto3.jpg',
    description: 'Mouse pad RGB extra grande.',
    price: 120,
    stars: 4,
    category: 'Acessório',
    brand: 'NexaCore'
  },
  {
    name: 'NexaCore-produto4',
    image: '/uploads/assets/NexaCore-produto4.jpg',
    description: 'Câmera de segurança Wi-Fi.',
    price: 300,
    stars: 4,
    category: 'Smart Home',
    brand: 'NexaCore'
  },
  {
    name: 'Optiview - produto1',
    image: '/uploads/assets/optiview-produto1.jpg',
    description: 'Monitor Optiview 24" Full HD, com alta taxa de atualização.',
    price: 899,
    stars: 4,
    category: 'Monitor',
    brand: 'Optiview'
  },
  {
    name: 'Optiview - produto2',
    image: '/uploads/assets/optiview-produto2.jpg',
    description: 'Monitor Optiview 27" 4K UHD para profissionais gráficos.',
    price: 1699,
    stars: 5,
    category: 'Monitor',
    brand: 'Optiview'
  },
  {
    name: 'Optiview - produto3',
    image: '/uploads/assets/optiview-produto3.jpg',
    description: 'Monitor Optiview curvo 34" ultrawide para multitarefa.',
    price: 2499,
    stars: 4,
    category: 'Monitor',
    brand: 'Optiview'
  },
  {
    name: 'PeriTech - logo',
    image: '/uploads/assets/PeriTech-logo.jpg',
    description: 'Logo oficial da PeriTech.',
    price: 0,
    stars: 0,
    category: 'Logo',
    brand: 'PeriTech'
  },
  {
    name: 'PeriTech - produto1',
    image: '/uploads/assets/PeriTech-produto1.jpg',
    description: 'Tablet PeriTech com tela de 10", ideal para produtividade.',
    price: 1299,
    stars: 4,
    category: 'Tablet',
    brand: 'PeriTech'
  },
  {
    name: 'PeriTech - produto2',
    image: '/uploads/assets/PeriTech-produto2.jpg',
    description: 'Smartwatch PeriTech resistente à água com GPS.',
    price: 699,
    stars: 4,
    category: 'Wearable',
    brand: 'PeriTech'
  },
  {
    name: 'Quanttum - logo',
    image: '/uploads/assets/quanttum-logo.jpg',
    description: 'Logo oficial da Quanttum.',
    price: 0,
    stars: 0,
    category: 'Logo',
    brand: 'Quanttum'
  },
  {
    name: 'Quanttum - produto1',
    image: '/uploads/assets/Quanttum-produto1.jpg',
    description: 'Smartphone Quanttum com câmera tripla e bateria de longa duração.',
    price: 2799,
    stars: 4,
    category: 'Smartphone',
    brand: 'Quanttum'
  },
  {
    name: 'Quanttum - produto2',
    image: '/uploads/assets/Quanttum-produto2.jpg',
    description: 'Fone de ouvido Quanttum com cancelamento de ruído ativo.',
    price: 499,
    stars: 4,
    category: 'Acessórios',
    brand: 'Quanttum'
  },
  {
    name: 'Quanttum - produto3',
    image: '/uploads/assets/quanttum-produto3.jpg',
    description: 'Carregador portátil Quanttum com 20.000 mAh.',
    price: 299,
    stars: 3,
    category: 'Acessórios',
    brand: 'Quanttum'
  },
  {
    name: 'Soundpulse - logo',
    image: '/uploads/assets/soundpulse-logo.jpg',
    description: 'Logo oficial da Soundpulse.',
    price: 0,
    stars: 0,
    category: 'Logo',
    brand: 'Soundpulse'
  },
  {
    name: 'Soundpulse - produto1',
    image: '/uploads/assets/soundpulse-produto1.jpg',
    description: 'Caixa de som Bluetooth Soundpulse com som estéreo potente.',
    price: 349,
    stars: 4,
    category: 'Áudio',
    brand: 'Soundpulse'
  }
];

async function seedProducts() {
  try {
    await db.sequelize.sync({ force: true }); // Sincroniza as tabelas, forçando a recriação
    await db.Produto.destroy({ truncate: true, restartIdentity: true }); // Limpa a tabela de produtos

    for (const productData of allProducts) {
      // Cria o produto na tabela Produto
      const [product, created] = await db.Produto.findOrCreate({
        where: { name: productData.name },
        defaults: productData
      });
      if (created) {
        console.log(`Produto '${product.name}' cadastrado com sucesso!`);
      } else {
        console.log(`Produto '${product.name}' já existe, pulando criação.`);
      }
    }

    console.log('✅ Todos os produtos foram processados.');
  } catch (error) {
    console.error('❌ Erro ao processar produtos:', error);
  } finally {
    await db.sequelize.close();
  }
}

seedProducts();