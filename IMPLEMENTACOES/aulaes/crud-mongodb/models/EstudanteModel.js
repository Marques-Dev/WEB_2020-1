var mongoose = require('mongoose');

var EstudanteSchema = mongoose.Schema(
    {
        nome: { type: String, max: 150 },
        curso: { type: String, max: 100 },
        IRA: { type: Number },
    }
);

var EstudanteModel = mongoose.model('estudantes', EstudanteSchema);

module.exports = EstudanteModel;