const EstudanteModel = require('../models/EstudanteModel')

let estudantes = []
let _id = 0

class EstudanteService{

    static register(data){
        let estudante = new EstudanteModel(
            _id++,
            data.nome,
            data.curso,
            data.IRA

        )
        estudantes.push(estudante)
        return estudante
    }

    static list(){
        return estudantes;
    }

}

module.exports = EstudanteService