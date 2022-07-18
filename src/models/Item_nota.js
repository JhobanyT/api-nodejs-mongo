import { Schema, model } from "mongoose";

const item_notaSchema = new Schema(
    {
        visita: [
            {
                type: Schema.Types.ObjectId,
                ref: "Visita",
            },
        ],
        item: [
            {
                type: Schema.Types.ObjectId,
                ref: "Item",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Item_nota', item_notaSchema);