'use strict';

const bodyParser = require('body-parser');

const jsonpembeli = require('../controllers/PembeliController');

module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve packages
    app.route('/pembeli/tampil')
        .get(jsonpembeli.getAllPembeli);

    // Endpoint to add a new package
    app.route('/pembeli/tambah')
        .post(jsonpembeli.addPembeli);

    // Endpoint to update a package (use colon `:` for route parameters)
    app.route('/pembeli/ubah/:id_pembeli')
        .put(jsonpembeli.updatePembeli);

    app.route('/pembeli/hapus/:id_pembeli')
        .delete(jsonpembeli.deletePembeli);
};