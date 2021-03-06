import { Schema, model } from "mongoose";

const nivelSchema = new Schema(
    {
        nombre: String,
        descripcion: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Nivel', nivelSchema);