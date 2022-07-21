import { Schema, model } from "mongoose";

const convenioSchema = new Schema(
    {
    nombre: String,
    detalle: String,
    periodo_inicio: {
        dia: Number,
        mes: Number,
        anio: Number
    },
    periodo_fin: {
        di: Number,
        me: Number,
        an: Number
    },
    estado: Boolean,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Convenio', convenioSchema);
