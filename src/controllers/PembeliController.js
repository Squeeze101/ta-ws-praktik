"use strict";
const Pembeli = require('../models/PembeliModel'); // Pastikan path menuju model PembeliModel yang benar

const getAllPembeli = async (req, res) => {
  try {
    const allPembeli = await Pembeli.findAll();
    res.json(allPembeli);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPembeliById = async (req, res) => {
  try {
    const pembeli = await Pembeli.findByPk(req.params.id_pembeli);
    if (!pembeli) {
      return res.status(404).json({ message: 'Pembeli not found' });
    }
    res.json(pembeli);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPembeli = async (req, res) => {
  try {
    const newPembeli = await Pembeli.create(req.body);
    res.status(201).json(newPembeli);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePembeli = async (req, res) => {
  try {
    const pembeli = await Pembeli.findByPk(req.params.id_pembeli);
    if (!pembeli) {
      return res.status(404).json({ message: 'Pembeli not found' });
    }
    await pembeli.update(req.body);
    res.json({ message: 'Pembeli updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletePembeli = async (req, res) => {
  try {
    const pembeli = await Pembeli.findByPk(req.params.id_pembeli);
    if (!pembeli) {
      return res.status(404).json({ message: 'Pembeli not found' });    
    }
    await pembeli.destroy();
    res.json({ message: 'Pembeli deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPembeli,
  getPembeliById,
  addPembeli,
  updatePembeli,
  deletePembeli,
};
