import { Schema, model } from "mongoose";

const cargoSchema = new Schema(
    {
        nombre: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Cargo', cargoSchema);