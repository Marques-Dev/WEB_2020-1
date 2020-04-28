const EstudanteModel = require('../models/EstudanteModel')

class EstudanteService {

    static register(req, res) {
        EstudanteModel.create(req.body)
            .then(
                (estudante) => {
                    res.status(201).json(estudante);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static list(req, res) {
        EstudanteModel.find()
        .then(
            (estudantes) => {
                res.status(201).json(estudantes);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

}

module.exports = EstudanteService