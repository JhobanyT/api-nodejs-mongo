import { Schema, model } from "mongoose";

const itemSchema = new Schema(
    {
        nombre: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Item', itemSchema);