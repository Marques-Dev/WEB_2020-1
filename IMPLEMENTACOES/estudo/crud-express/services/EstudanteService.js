const EstudanteModel = require('../models/EstudanteModel')

let estudantes = [
    {_id:0,nome:'Jefferson',curso:'SI',IRA:9.8},
    {_id:1,nome:'Thomas',curso:'SI',IRA:5.5},
    {_id:2,nome:'Luciana',curso:'SI',IRA:7}
]
let _id = 3

class EstudanteService{

    static register(data){
        let estudante = new EstudanteModel(
                            _id++,
                            data.nome,
                            data.curso,
                            data.IRA);
        estudantes.push(estudante);
        return estudante;
    }

    static list(){
        return estudantes;
    }

    static update(_id,data){
        for(let e of estudantes){
            if(e._id == _id){
                e.nome = data.nome
                e.curso = data.curso
                e.IRA = data.IRA
                return e;
            }
        }
        return null;
    }

    static delete(_id){
        
        for( let i = 0; i < estudantes.length; i++){ 
            if(estudantes[i]._id == _id){
                estudantes.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(_id){
        
        for( let i = 0; i < estudantes.length; i++){ 
            if(estudantes[i]._id == _id){
                return estudantes[i];
            }
        }
        return {};
    }
}

module.exports = EstudanteService