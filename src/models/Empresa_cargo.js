import { Schema, model } from "mongoose";

const empresa_cargoSchema = new Schema(
    {
        id_empresa_cargo: Number,
        id_empresa: Number,
        id_cargo: Number,
        id_persona: Number,
        estado: Boolean,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Empresa_cargo', empresa_cargoSchema);