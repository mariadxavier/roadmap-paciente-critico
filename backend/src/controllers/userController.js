import { users } from "../models/index.js";
import bcrypt from "bcrypt";

const saltRounds = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
const salt = bcrypt.genSaltSync(saltRounds);

class UserController {
    static listarUsers = async (req, res) => {
        try {
            const usersTotal = await users.find();
            // req.resultado = usersTotal;
            res.status(200).json(usersTotal);
        } catch (erro) {
            res.status(404).json({
                message: `Erro interno do servidor ${erro}`,
            });
        }
    };

    static criaUser = async (req, res) => {
        try {
            const { email, apelido, senha } = req.body;

            const senhaCripto = bcrypt.hashSync(senha.trim(), salt);

            const procuraUser = await users.findOne({ email });

            if (procuraUser === null) {
                const novoUser = await users.create({
                    email: email.trim(),
                    apelido: apelido.trim(),
                    senha: senhaCripto,
                });

                res.status(201).json({
                    message: "Usuário criado com sucesso",
                    novoUser,
                });
            } else {
                res.status(500).json({
                    message: "Email já cadastrado",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: "Algo deu errado",
                erro,
            });
        }
    };

    static listarUserByEmail = async (req, res) => {
        const email = req.params.email;
        try {
            const userEncotrado = await users.findOne(
                { email: email.trim() },
                { senha: 0 }
            );
            if (userEncotrado !== null) {
                res.status(200).json(userEncotrado);
            } else {
                res.status(200).json({
                    message: "Esse email não foi cadastrado",
                });
            }
        } catch (erro) {
            res.status(500).json({
                message: "Problema na função de achar por email",
            });
        }
    };

    static logarUser = async (req, res) => {
        try {
            const { email, senha } = req.body;
            const usuarioEncontrado = await users.findOne({
                email: email.trim(),
            });

            const senhaCorreta = await bcrypt.compare(
                senha,
                usuarioEncontrado.senha
            );
            if (senhaCorreta) {
                res.status(200).json({ autorizado: senhaCorreta });
            } else {
                res.status(500).json({
                    autorizado: senhaCorreta,
                    message: "Senha e/ou email incorretos",
                });
            }
        } catch (erro) {
            res.status(500).json({ message: "Função logar com problema" });
        }
    };
}

export default UserController;
