const categoriesSeed = require('./category');
const productsSeed = require('./product');
const tagsSeed = require('./tag');
const productTagsSeed = require('./product-tag');

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE IS SYNCED -----\n');
    await categoriesSeed();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await productsSeed();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await tagsSeed();
    console.log('\n----- TAGS SEEDED -----\n');

    await productTagsSeed();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();