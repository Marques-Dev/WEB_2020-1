var express = require('express');
var router = express.Router();
var EstudanteService = require('../services/EstudanteService')

router.get('/list', function (req, res, next) {
    EstudanteService.list(req, res);
});
router.post('/register', function (req, res, next) {
    EstudanteService.register(req, res);
});

module.exports = router