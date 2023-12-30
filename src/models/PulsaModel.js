const { DataTypes } = require('sequelize');
const sequelize = require('../../koneksi'); // Pastikan path koneksi yang benar

const Pulsa = sequelize.define('Pulsa', {
  id_pulsa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  jumlah_pulsa: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  provider: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  harga_pulsa: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'pulsa', // Nama tabel yang sesuai dengan struktur SQL Anda
  timestamps: false, // Jika tabel tidak memiliki kolom timestamps (created_at, updated_at)
  charset: 'utf8mb4', // Karakter set yang sesuai dengan struktur SQL Anda
  collate: 'utf8mb4_unicode_ci', // Kollasi yang sesuai dengan struktur SQL Anda
});

module.exports = Pulsa;
