import { lessons } from "../models/index.js";

class LessonController {
    static listarLessons = async (req, res) => {
        try {
            const lessonsEncontradas = await lessons.find();
            res.status(200).json({ lessonsEncontradas });
        } catch (erro) {
            res.status(500).json({
                message: "Erro na função de buscar o conteudo do BD",
            });
        }
    };

    static postaLessons = async (req, res) => {
        const reqLesson = req.body;
        try {
            const lessonCriada = await lessons.create(reqLesson);
            res.status(200).json({
                message: "Lesson postada com sucesso",
                lessonCriada,
            });
        } catch (erro) {
            res.status(500).json({
                message: "Erro na função de criar as lesson",
            });
        }
    };
}

export default LessonController;
