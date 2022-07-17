import { Schema, model } from "mongoose";

const notaSchema = new Schema(
    {
        id_nota: Number,
        id_item_descripcion: Number,
        id_detalle_item: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Nota', notaSchema);