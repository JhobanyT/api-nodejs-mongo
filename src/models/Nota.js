import { Schema, model } from "mongoose";

const notaSchema = new Schema(
    {
      item_nota: [
        {
            type: Schema.Types.ObjectId,
            ref: "Item_nota",
        },
      ],
      detalle_item: [
          {
            type: Schema.Types.ObjectId,
            ref: "Detalle_item",
          },
      ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Nota', notaSchema);