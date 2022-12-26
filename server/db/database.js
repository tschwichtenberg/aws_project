const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:ps11fsa11@fsasenior.ccghrvqzuki6.us-east-2.rds.amazonaws.com:5432/fsasenior', {
    logging: false,
});

module.exports = db;