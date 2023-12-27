'use strict';

const {json} = require('body-parser');

module.exports = function(app){
    var jsonku = require('../controller/controller')

    //endpoint root
    app.route('/')
        .get(jsonku.index);
}