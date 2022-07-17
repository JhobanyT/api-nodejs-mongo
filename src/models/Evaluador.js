import { Schema, model } from "mongoose";

const evaluadorSchema = new Schema(
    {
        id_evaluador: Number,
        dni: Number,
        id_grado: Number,
        id_persona: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Evaluador', evaluadorSchema);