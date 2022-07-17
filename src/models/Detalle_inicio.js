import { Schema, model } from "mongoose";

const detalle_inicioSchema = new Schema(
    {
        inicio: [
            {
                type: Schema.Types.ObjectId,
                ref: "Inicio",
            },
        ],
        documento: [
            {
                type: Schema.Types.ObjectId,
                ref: "Documento",
            },
        ],
        path: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Detalle_inicio', detalle_inicioSchema);