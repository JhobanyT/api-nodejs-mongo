import { Schema, model } from "mongoose";

const personaSchema = new Schema(
    {
    nombre: String,
    ape_paterno: String,
    ape_materno: String,
    sexo: String,
    f_nacimiento: {
        dia: Number,
        mes: Number,
        anio: Number
    },
    direccion: String,
    telefono: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Persona', personaSchema);