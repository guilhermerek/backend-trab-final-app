const db = require("../db");

module.exports = {
    findUser: (grr, senha) => {
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM usuarios WHERE grr = ? AND senha = ?', [grr, senha], (error, results)=> {
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