"use strict";
const Pulsa = require('../models/PulsaModel'); // Pastikan path menuju model PembeliModel yang benar

const getAllPulsa = async (req, res) => {
  try {
    const allPulsa = await Pulsa.findAll();
    res.json(allPulsa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPulsaById = async (req, res) => {
  try {
    const Pulsa = await Pulsa.findByPk(req.params.id_pembeli);
    if (!pembeli) {
      return res.status(404).json({ message: 'Pulsa not found' });
    }
    res.json(pulsa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPulsa = async (req, res) => {
  try {
    const newPulsa = await Pulsa.create(req.body);
    res.status(201).json(newPulsa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePulsa = async (req, res) => {
  try {
    const pulsa = await Pulsa.findByPk(req.params.id_pulsa);
    if (!pulsa) {
      return res.status(404).json({ message: 'Paket not found' });
    }
    await pulsa.update(req.body);
    res.json({ message: 'Paket updated successfully' });
  } catch (err) { 
    res.status(400).json({ message: err.message });
  }
};

const deletePulsa = async (req, res) => {
  try {
    const pulsa = await Pulsa.findByPk(req.params.id_pulsa);
    if (!pulsa) {
      return res.status(404).json({ message: 'Pembeli not found' });    
    }
    await pulsa.destroy();
    res.json({ message: 'Pembeli deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPulsa,
  getPulsaById,
  addPulsa,
  updatePulsa,
  deletePulsa,
};
