import { Schema, model } from "mongoose";

const visitaSchema = new Schema(
    {
        practica: [
            {
                type: Schema.Types.ObjectId,
                ref: "Practica",
            },
        ],
        fecha: {
            dia: Number,
            mes: Number,
            anio: Number
        },
        evaluador: [
            {
                type: Schema.Types.ObjectId,
                ref: "Evaluador",
            },
        ],
        estado: [
            {
                type: Schema.Types.ObjectId,
                ref: "Estado",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Visita', visitaSchema);