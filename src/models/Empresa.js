import { Schema, model } from "mongoose";

const empresaSchema = new Schema(
    {
        nombre: String,
        ruc: String,
        direccion: String,
        telefono: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Empresa', empresaSchema);