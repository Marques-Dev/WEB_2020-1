var express = require('express');
var router = express.Router();
var estudanteService = require('../services/EstudanteService');

router.get('/list', function (req, res, next) {
    return res.json(estudanteService.list());
});

router.post('/register', function (req, res, next) {
    const estudante = estudanteService.register(req.body);
    return res.json(estudante);
});

router.put('/update/:id', function (req, res, next) {
    const estudante = estudanteService.update(req.params.id, req.body);
    return res.json(estudante);
});

router.delete('/delete/:id', function (req, res, next) {
    const ok = estudanteService.delete(req.params.id);
    if (ok) return res.json({ "sucess": true });
    else return res.json({ "sucess": false });
});

router.get('/retrieve/:id', function (req, res, next) {
    const estudante = estudanteService.retrieve(req.params.id);
    return res.json(estudante);
});

module.exports = router;