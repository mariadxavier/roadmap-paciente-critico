import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        lesson: {
            type: mongoose.Schema.Types.Mixed,
        },
    },
    {
        versionKey: false,
    }
);

const lessons = mongoose.model("lessons", lessonSchema);

export default lessons;
