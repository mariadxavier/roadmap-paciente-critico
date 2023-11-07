import express from "express";
import ProgressosController from "../controllers/progressoController.js";

const router = express.Router();
router
    .get("/progressos", ProgressosController.listaProgressos)
    .get("/progressos/:userId", ProgressosController.listarProgressoByUserId)
    .post("/progressos", ProgressosController.criaProgresso)
    .put("/progressos/:userId", ProgressosController.atualizaProgresso);

export default router;
