import express from "express";
import LessonController from "../controllers/lessonController.js";

const router = express.Router();

router
    .get("/lessons", LessonController.listarLessons)
    .post("/lessons", LessonController.postaLessons);

export default router;
