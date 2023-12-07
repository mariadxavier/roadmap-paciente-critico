import express from "express";
import QuizController from "../controllers/quizController.js";

const router = express.Router();

router.get("/quiz", QuizController.listarQuiz);

export default router;
