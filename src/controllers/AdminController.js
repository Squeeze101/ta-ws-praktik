"use strict";
const Admin = require('../models/AdminModel'); // Pastikan path menuju model Paket yang benar

const getAllAdmins = async (req, res) => {
  try {
    const allAdmin = await Admin.findAll();
    res.json(allAdmin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.username);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateAdmin = async (req, res) => {
  try {
    const admin= await Admin.findByPk(req.params.username);
    if (!admin) {
      return res.status(404).json({ message: 'admin not found' });
    }
    await admin.update(req.body);
    res.json({ message: 'Paket updated successfully' });
  } catch (err) { 
    res.status(400).json({ message: err.message });
  }
};


module.exports = {
  getAllAdmins,
  getAdminById,
  updateAdmin,
};
