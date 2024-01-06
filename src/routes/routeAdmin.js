'use strict';

const bodyParser = require('body-parser');

const jsonadmin = require('../controllers/AdminController');


module.exports = function (app) {
    // Apply body-parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Endpoint to retrieve packages
    app.route('/admin/tampil')
        .get(jsonadmin.getAllAdmins);

    // Endpoint to update a package (use colon `:` for route parameters)
    app.route('/admin/ubah/:username')
        .put(jsonadmin.updateAdmin);

    app.route('/paket/tampil/:username')
        .delete(jsonadmin.getAdminById);
};



