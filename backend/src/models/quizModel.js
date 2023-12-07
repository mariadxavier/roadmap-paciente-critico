import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        quiz: {
            type: mongoose.Schema.Types.Mixed,
        },
    },
    {
        versionKey: false,
    }
);

const quiz = mongoose.model("quiz", quizSchema);

export default quiz;
