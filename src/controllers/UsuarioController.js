const UsuarioController = require("../models/UsuarioModel");

module.exports = {
    logar: async (req, res)=>{
        let json= {error: '', result:{}};

        let grr = req.body.grr;
        let senha = req.body.senha;

        if(grr && senha) {
            let user = await UsuarioModel.findUser(grr, senha);
            if(user){
                json.result = user;
            }
            res.json(json);
        }else{
            json.error = "Campos em branco!";
        }

        res.json(json);
    },
    one: async (req, res)=> {
        let json= {error: '', result:{}};

        let id = req.params.id;
        let usuario = await UsuarioModel.findById(idcredenciais);
        if(usuario){
            json.result=usuario;
        }
        res.json(json);
    }
    
}