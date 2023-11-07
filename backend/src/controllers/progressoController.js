import { progressos } from "../models/index.js";

class ProgressosController {
    static listaProgressos = async (req, res) => {
        try {
            const todosProgressos = await progressos.find().populate("user");
            // req.resultado = todosProgressos;
            res.status(200).json(todosProgressos);
        } catch (erro) {
            res.status(404).json({
                message: `Erro interno do servidor ${erro}`,
            });
        }
    };

    static criaProgresso = async (req, res) => {
        try {
            const novoProgresso = await progressos.create(req.body);
            res.status(201).json({
                message: "Progresso criado com sucesso",
                novoProgresso,
            });
        } catch (erro) {
            res.status(500).json({
                message: "Algo deu errado",
            });
        }
    };

    static atualizaProgresso = async (req, res) => {
        const userId = req.params.userId;
        try {
            const progressoAtualizado = await progressos.findOneAndUpdate(
                { user: userId },
                req.body
            );
            if (progressoAtualizado !== null) {
                res.status(200).json({
                    message: "progresso atualizado com sucesso",
                });
            } else {
                res.status(404).json({
                    message: "Usuário não encontrado",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: "Algo errado com a função update dos progressos",
            });
        }
    };

    static listarProgressoByUserId = async (req, res) => {
        const userId = req.params.userId;
        try {
            const progressoEncontrado = await progressos
                .findOne({
                    user: userId,
                })
                .populate("user");
            if (progressoEncontrado !== null) {
                res.status(200).json(progressoEncontrado);
            } else {
                res.status(500).json({
                    message: "progresso não encontrado, há um problema grave",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: "Erro na função de achar o progresso por userId",
            });
        }
    };
}

export default ProgressosController;
