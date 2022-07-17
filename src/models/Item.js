import { Schema, model } from "mongoose";

const itemSchema = new Schema(
    {
        id_item: Number,
        nombre: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Item', itemSchema);