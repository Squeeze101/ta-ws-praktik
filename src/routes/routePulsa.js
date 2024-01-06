'use strict';

const bodyParser = require('body-parser');
const jsonpulsa = require('../controllers/PulsaController');

module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve Pulsa data
    app.route('/pulsa/tampil')
        .get(jsonpulsa.getAllPulsa);

    // Endpoint to add new Pulsa data
    app.route('/pulsa/tambah')
        .post(jsonpulsa.addPulsa);

    // Endpoint to update Pulsa data
    app.route('/pulsa/ubah/:id_pulsa')
        .put(jsonpulsa.updatePulsa);

    // Endpoint to delete Pulsa data
    app.route('/pulsa/hapus/:id_pulsa')
        .delete(jsonpulsa.deletePulsa);
};
