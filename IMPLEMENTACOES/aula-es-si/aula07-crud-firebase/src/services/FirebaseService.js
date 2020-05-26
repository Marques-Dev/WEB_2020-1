export default class FirebaseService {

    static list = (firestore, callback) => {

        let ref = firestore.collection('estudantes')
        ref.onSnapshot((query) => {
            let estudantes = []

            query.forEach((doc) => {
                const { nome, curso, IRA } = doc.data()
                estudantes.push({
                    _id: doc.id,
                    nome,
                    curso,
                    IRA
                })//push
            })//forEach
            callback(estudantes)
        })

    }

    static delete = (firestore, callback, id) => {

        firestore.collection('estudantes').doc(id).delete()
            .then(
                () => {
                    //console.log(`${nome} apagado.`)
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    //console.log(error)
                    callback('nok')
                }
            )
    }

    static create = (firestore, callback, estudante) => {

        firestore.collection('estudantes').add(
            {
                nome: estudante.nome,
                curso: estudante.curso,
                IRA: estudante.IRA
            }
        )
            .then(
                () => {
                    callback('ok')
                }
            )
            .catch(
                (error) => {
                    callback('nok')
                }
            )
    }

    static retrieve = (firestore, callback, id) => {

        firestore.collection('estudantes').doc(id).get()
            .then((doc) => {
                const estudante = {
                    nome: doc.data().nome,
                    curso: doc.data().curso,
                    IRA: doc.data().IRA
                }
                callback(estudante)
            })
            .catch(error => callback(null))

    }

    static edit = (firestore, callback, id, estudante) => {

        firestore.collection('estudantes').doc(id).set({
            nome: estudante.nome,
            curso: estudante.curso,
            IRA: estudante.IRA
        })
            .then(() => {
                callback('ok')
            })
            .catch(() => {
                callback('ok')
            });
    }
}