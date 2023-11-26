const db = require("../db");

module.exports = {
    findUser: (grr, senha) => {
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM credenciais WHERE usuario = ? AND senha = ?', [grr, senha], (error, results)=> {
                if(error){
                    reject(error); return;
                }
                if(results.length>0){
                    resolve(results[0]);
                }else{
                    resolve(false);
                }
                console.log(results);
            })
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM credenciais WHERE idcredenciais = ?', [id], (error, results)=> {
                if(error){
                    reject(error); return;
                }
                if(results.length>0){
                    resolve(results[0]);
                }else{
                    resolve(false);
                }
            })
        });
    }
        
}