'use strict';

const bodyParser = require('body-parser');

const jsonpaket = require('../controllers/PaketController');


module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve packages
    app.route('/paket/tampil')
        .get(jsonpaket.getAllPakets);

    // Endpoint to add a new package
    app.route('/paket/tambah')
        .post(jsonpaket.addPaket);

    // Endpoint to update a package (use colon `:` for route parameters)
    app.route('/paket/ubah/:id_paket')
        .put(jsonpaket.updatePaket);

    app.route('/paket/hapus/:id_paket')
        .delete(jsonpaket.deletePaket);
};



