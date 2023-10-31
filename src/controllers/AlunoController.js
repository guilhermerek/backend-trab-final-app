//Controller Aluno

const AlunoModel = require("../models/AlunoModel");

module.exports = {
    ping: (req, res) => {
        res.json({pong: true});
    },
    all: async (req, res)=> {
        let json= {error: '', result:[]};

        let aluno = await AlunoModel.getAll();
        for(let i in aluno){
            json.result.push({
                id_aluno : aluno[i].id_aluno,
                nome_aluno : aluno[i].nome_aluno,
                matricula_aluno : aluno[i].matricula_aluno,
                aluno_ativo : aluno[i].aluno_ativo
            });
        }
        
        res.json(json);
    },
    one: async (req, res)=> {
        let json= {error: '', result:{}};

        let id = req.params.id;
        let aluno = await AlunoModel.findById(id);
        if(aluno){
            json.result=aluno;
        }
        res.json(json);
    },
    new: async (req, res)=>{
        let json= {error: '', result:{}};

        let nome_aluno = req.body.nome_aluno;
        let matricula_aluno = req.body.matricula_aluno;
        let aluno_ativo = req.body.aluno_ativo;

        if(nome_aluno && matricula_aluno) {
            let alunoId = await AlunoModel.add(nome_aluno, matricula_aluno, aluno_ativo);
            json.result = {
                id_aluno: alunoId,
                nome_aluno,
                matricula_aluno,
                aluno_ativo
            }
        }else{
            json.error = "Campos em branco!";
        }

        res.json(json);
    },
    edit: async (req, res)=>{
        let json= {error: '', result:{}};



        let id = req.params.id;
        let nome_aluno = req.body.nome_aluno;
        let matricula_aluno = req.body.matricula_aluno;
        let aluno_ativo = req.body.aluno_ativo;
        
        if(id && nome_aluno && matricula_aluno) {
            await AlunoModel.update(id, nome_aluno, matricula_aluno, aluno_ativo);
            
            json.result = {
                id,
                nome_aluno,
                matricula_aluno,
                aluno_ativo
            }
        }else{
            json.error = "Campos não enviados!";
        }
        
        
        res.json(json);
    },
    delete: async (req, res)=>{
        let json= {error: '', result:{}};

        await AlunoModel.delete(req.params.id);

        res.json(json);
    }
}