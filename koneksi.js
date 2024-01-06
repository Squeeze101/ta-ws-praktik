// koneksi.js
const { Sequelize } = require('sequelize');

// Konfigurasi koneksi ke database
const sequelize = new Sequelize('dbtopup', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Sesuaikan dengan jenis database yang digunakan
});

module.exports = sequelize;
