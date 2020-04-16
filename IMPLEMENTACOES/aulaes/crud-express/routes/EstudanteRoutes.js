var express = require('express');
var router = express.Router();

var EstudanteService = require('../services/EstudanteService')

router.get('/list',function(req,res,next){
    res.json(EstudanteService.list())
})

router.post('/register',function(req,res,next){
    res.json(EstudanteService.register(req.body))
})

module.exports = router