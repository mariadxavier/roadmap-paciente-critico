import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        email: {
            type: String,
            required: [true, "É obrigatório o uso de um email"],
        },
        apelido: {
            type: String,
            required: [true, "É obrigatório o uso de um apelido"],
        },
        senha: {
            type: String,
            required: [true, "A senha é obrigatória"],
        },
    },
    {
        versionKey: false,
    }
);

const users = mongoose.model("users", userSchema);

export default users;
