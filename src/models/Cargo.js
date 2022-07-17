import { Schema, model } from "mongoose";

const cargoSchema = new Schema(
    {
        id_cargo: Number,
        nombre: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Cargo', cargoSchema);