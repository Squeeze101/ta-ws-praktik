const { DataTypes } = require('sequelize');
const sequelize = require('../../koneksi'); // Ensure the correct path to your Sequelize instance

const Paket = sequelize.define('Paket', {
  id_paket: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_paket: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  harga_paket: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  jumlah_data: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  jumlah_telpon: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  masa_aktif: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
}, {
  tableName: 'paket', // Ensure this table name matches your SQL structure
  timestamps: false, // Adjust as needed based on your table columns
  charset: 'utf8mb4', // Adapt based on your character set requirements
  collate: 'utf8mb4_unicode_ci', // Choose collation accordingly
});

module.exports = Paket;
