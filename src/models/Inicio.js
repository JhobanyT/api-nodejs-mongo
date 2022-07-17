import { Schema, model } from "mongoose";

const inicioSchema = new Schema(
    {
        solicitud: [
            {
                type: Schema.Types.ObjectId,
                ref: "Solicitud",
            },
        ],
        estado: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Inicio', inicioSchema);