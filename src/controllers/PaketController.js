"use strict";
const Paket = require('../models/PaketModel'); // Pastikan path menuju model Paket yang benar

const getAllPakets = async (req, res) => {
  try {
    const allPakets = await Paket.findAll();
    res.json(allPakets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPaketById = async (req, res) => {
  try {
    const paket = await Paket.findByPk(req.params.id_paket);
    if (!paket) {
      return res.status(404).json({ message: 'Paket not found' });
    }
    res.json(paket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPaket = async (req, res) => {
  try {
    const newPaket = await Paket.create(req.body);
    res.status(201).json(newPaket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePaket = async (req, res) => {
  try {
    const paket = await Paket.findByPk(req.params.id_paket);
    if (!paket) {
      return res.status(404).json({ message: 'Paket not found' });
    }
    await paket.update(req.body);
    res.json({ message: 'Paket updated successfully' });
  } catch (err) { 
    res.status(400).json({ message: err.message });
  }
};

const deletePaket = async (req, res) => {
  try {
    const paket = await Paket.findByPk(req.params.id_paket);
    if (!paket) {
      return res.status(404).json({ message: 'Paket not found' });
    }
    await paket.destroy();
    res.json({ message: 'Paket deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPakets,
  getPaketById,
  addPaket,
  updatePaket,
  deletePaket,
};
