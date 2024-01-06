"use strict";

const Transaksi = require('../models/TransaksiModel');
const Pembeli = require('../models/PembeliModel');
const Paket = require('../models/PaketModel');
const Pulsa = require('../models/PulsaModel');

const getAllTransaksi = async (req, res) => {
  try {
      const allTransaksi = await Transaksi.findAll({
        include: [Pembeli, Paket, Pulsa]
      });
    res.json(allTransaksi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTransaksiById = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
        include: [Pembeli, Paket, Pulsa]
      });

    if (!transaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }
    res.json(transaksi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTransaksi = async (req, res) => {
  try {
    const newTransaksi = await Transaksi.create(req.body);
    res.status(201).json(newTransaksi);
  } catch (err) {
    res.status(400).json({ message: "Gagal Melakukan Transaksi" });


  }
};

const updateTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByPk(req.params.id_transaksi);
    if (!transaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }
    await transaksi.update(req.body);
    res.json({ message: 'Transaksi updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findByPk(req.params.id_transaksi);
    if (!transaksi) {
      return res.status(404).json({ message: 'Transaksi not found' });
    }
    await transaksi.destroy();
    res.json({ message: 'Transaksi deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTransaksi,
  getTransaksiById,
  addTransaksi,
  updateTransaksi,
  deleteTransaksi,
};
