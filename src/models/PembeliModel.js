const { DataTypes } = require('sequelize');
const sequelize = require('../../koneksi'); // Pastikan path koneksi yang benar

const Pembeli = sequelize.define('Pembeli', {
  id_pembeli: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
}, {
  tableName: 'pembeli', // Nama tabel yang sesuai dengan struktur SQL Anda
  timestamps: false, // Jika tabel tidak memiliki kolom timestamps (created_at, updated_at)
  charset: 'utf8mb4', // Karakter set yang sesuai dengan struktur SQL Anda
  collate: 'utf8mb4_unicode_ci', // Kollasi yang sesuai dengan struktur SQL Anda
});

module.exports = Pembeli;
