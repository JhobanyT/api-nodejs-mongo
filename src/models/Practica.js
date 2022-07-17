import { Schema, model } from "mongoose";

const practicaSchema = new Schema(
    {
        inicio: [
            {
                type: Schema.Types.ObjectId,
                ref: "Inicio",
            },
        ],
        f_inicio: {
            dia: Number,
            mes: Number,
            anio: Number
        },
        f_fin: {
            di: Number,
            me: Number,
            an: Number
        },
        h_entrada: Number,
        h_salida: Number,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Practica', practicaSchema);