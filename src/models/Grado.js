import { Schema, model } from "mongoose";

const gradoSchema = new Schema(
    {
        id_grado: Number,
        nombre: String,

    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Grado', gradoSchema);