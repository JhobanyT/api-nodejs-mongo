import { Schema, model } from "mongoose";

const evaluadorSchema = new Schema(
    {
        dni: Number,
        grado: [
            {
                type: Schema.Types.ObjectId,
                ref: "Grado",
            },
        ],
        persona: [
            {
                type: Schema.Types.ObjectId,
                ref: "Persona",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Evaluador', evaluadorSchema);