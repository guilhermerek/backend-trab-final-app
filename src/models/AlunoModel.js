//Modelo Aluno

const db = require('../db');

module.exports = {
    getAll:  () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM aluno', (error, results)=>{
                if(error) {reject(error); return;}
                resolve(results);
            });

        });
    },
    findById: (id)=>{
        console.log(id);
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM aluno WHERE id = ?', [id], (error, results)=>{
                console.log(results);
                if(error) {reject(error); return;}
                if(results.length > 0) {
                    resolve(results[0]);
                }else{
                    resolve(false);
                }
            });
        });
    },
    add: (nome_aluno, matricula_aluno, aluno_ativo) =>{
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO aluno (nome_aluno, matricula_aluno, aluno_ativo) VALUES (?, ?, ?)', [nome_aluno, matricula_aluno, aluno_ativo], (error, results)=> {
                if(error) {reject(error); return;}
                resolve(results.insertId);
            })
        });
    },
    update: (id, nome_aluno, matricula_aluno, aluno_ativo) =>{
        return new Promise((resolve, reject) => {
            
            db.query('UPDATE aluno SET nome_aluno = ?, matricula_aluno = ?, aluno_ativo = ? WHERE id = ?', [nome_aluno, matricula_aluno, aluno_ativo, id], (error, results)=> {
                if(error) {reject(error); return;}
                
                resolve(results);
            })
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM aluno WHERE id = ?', [id], (error, results)=>{
                if(error) {reject(error); return;}
                resolve(results);
            });
        });
    }
}