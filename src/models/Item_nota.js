import { Schema, model } from "mongoose";

const item_notaSchema = new Schema(
    {
        id_item_descripcion: Number,
        id_visita: Number,
        id_item: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Item_nota', item_notaSchema);