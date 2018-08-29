'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const ResultsController = controllers.ResultsController;

const resultsRouter = express.Router();
//resultsRouter.use(bodyParser.json());

resultsRouter.get('/', function(req, res) {
    ResultsController.getAll()
    .then((results) => {
        res.json(results);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

resultsRouter.get('/:resultId', function(req, res) {
    ResultsController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = resultsRouter;
