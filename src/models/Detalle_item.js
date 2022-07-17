import { Schema, model } from "mongoose";

const detalle_itemSchema = new Schema(
    {
        item: [
            {
                type: Schema.Types.ObjectId,
                ref: "Item",
            },
        ],
        nombre: String,
        nivel: [
            {
                type: Schema.Types.ObjectId,
                ref: "Nivel",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Detalle_item', detalle_itemSchema);