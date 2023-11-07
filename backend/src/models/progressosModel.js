import mongoose from "mongoose";

const progressoSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        progresso: {
            type: mongoose.Schema.Types.Mixed,
        },
    },
    {
        versionKey: false,
    }
);

const progressos = mongoose.model("progressos", progressoSchema);

export default progressos;
