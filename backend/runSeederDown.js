
const db = require('./models');
const seeder = require('./seeders/20250703-demo-products.js');

db.sequelize.sync().then(async () => {
  await seeder.down(db.sequelize.getQueryInterface(), db.Sequelize);
  console.log('Seeder down run successfully');
  process.exit();
});
