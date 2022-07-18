import { Schema, model } from "mongoose";

const estudianteSchema = new Schema(
    {
        codigo: Number,
        persona: [
            {
                type: Schema.Types.ObjectId,
                ref: "Persona",
            },
        ],
        ciclo: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Estudiante', estudianteSchema);