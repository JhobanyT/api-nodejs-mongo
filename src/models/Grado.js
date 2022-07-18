import { Schema, model } from "mongoose";

const gradoSchema = new Schema(
    {
        nombre: String,

    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Grado', gradoSchema);