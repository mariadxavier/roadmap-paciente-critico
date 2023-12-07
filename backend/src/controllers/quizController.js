import { quiz } from "../models/index.js";

class QuizController {
    static listarQuiz = async (req, res) => {
        try {
            const quizEncontrado = await quiz.find();
            res.status(200).json({ quizEncontrado });
        } catch (erro) {
            res.status(200).json({ message: "erro ao trazer o quiz do BD" });
        }
    };
}

export default QuizController;
