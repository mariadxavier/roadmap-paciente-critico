import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .get("/users", UserController.listarUsers)
    .post("/users/logar", UserController.logarUser)
    .get("/users/:email", UserController.listarUserByEmail)
    .post("/users", UserController.criaUser);

export default router;
