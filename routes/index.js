'use strict';

const express = require('express');
const config = require('../config');

const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/web-service/results', require('./results'));
    app.use('/', express.static(config.webapp.dir));
};

module.exports = RouteManager;
