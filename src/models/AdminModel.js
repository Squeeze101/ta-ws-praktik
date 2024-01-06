const { DataTypes } = require('sequelize');
const sequelize = require('../../koneksi'); // Pastikan path koneksi yang benar

const Admin = sequelize.define('Admin', {
  username: {
    type: DataTypes.STRING(60),
    allowNull:false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'admin', // Nama tabel yang sesuai dengan struktur SQL Anda
  timestamps: false, // Jika tabel tidak memiliki kolom timestamps (created_at, updated_at)
  charset: 'utf8mb4', // Karakter set yang sesuai dengan struktur SQL Anda
  collate: 'utf8mb4_unicode_ci', // Kollasi yang sesuai dengan struktur SQL Anda
});

module.exports = Admin;
