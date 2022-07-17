import { Schema, model } from "mongoose";

const estudianteSchema = new Schema(
    {
        id_estudiante: Number,
        codigo: Number,
        id_persona: Number,
        ciclo: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Estudiante', estudianteSchema);