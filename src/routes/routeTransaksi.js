'use strict';

const bodyParser = require('body-parser');
const jsontransaksi = require('../controllers/TransaksiController');

module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve Pulsa data
    app.route('/transaksi/tampil')
        .get(jsontransaksi.getAllTransaksi);

    // Endpoint to add new Pulsa data
    app.route('/transaksi/tambah')
        .post(jsontransaksi.addTransaksi);

    // Endpoint to update Pulsa data
    app.route('/transaksi/ubah/:id_transaksi')
        .put(jsontransaksi.updateTransaksi);

    // Endpoint to delete Pulsa data
    app.route('/transaksi/hapus/:id_Transaksi')
        .delete(jsontransaksi.deleteTransaksi);
};
