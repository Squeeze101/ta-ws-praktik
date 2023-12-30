const { DataTypes } = require('sequelize');
const sequelize = require('../../koneksi'); // Pastikan path koneksi yang benar

// Import model-model lainnya
const Pembeli = require('./PembeliModel');
const Paket = require('./PaketModel');
const Pulsa = require('./PulsaModel');

const Transaksi = sequelize.define('Transaksi', {
  id_transaksi: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pembeli: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_paket: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_pulsa: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  waktu: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  jenis: {
    type: DataTypes.ENUM('paket', 'pulsa'),
    allowNull: true,
  },
  detail: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'transaksi', // Nama tabel yang sesuai dengan struktur SQL Anda
  timestamps: false, // Jika tabel tidak memiliki kolom timestamps (created_at, updated_at)
  charset: 'utf8mb4', // Karakter set yang sesuai dengan struktur SQL Anda
  collate: 'utf8mb4_unicode_ci', // Kollasi yang sesuai dengan struktur SQL Anda
});

// Definisi foreign key (hubungan antar tabel)
Transaksi.belongsTo(Pembeli, { foreignKey: 'id_pembeli' });
Transaksi.belongsTo(Paket,{ foreignKey: 'id_paket' });
Transaksi.belongsTo(Pulsa, { foreignKey: 'id_pulsa' });

module.exports = Transaksi;
