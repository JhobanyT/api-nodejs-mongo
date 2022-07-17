import { Schema, model } from "mongoose";

const detalle_itemSchema = new Schema(
    {
        id_detalle_item: Number,
        id_item: Number,
        nombre: String,
        id_nivel: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Detalle_item', detalle_itemSchema);