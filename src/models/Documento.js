import { Schema, model } from "mongoose";

const documentoSchema = new Schema(
    {
        nombre: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Documento', documentoSchema);