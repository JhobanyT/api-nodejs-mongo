import { Schema, model } from "mongoose";

const solicitudSchema = new Schema(
    {
        estado_solicitud: String,
        empresa: [
            {
                type: Schema.Types.ObjectId,
                ref: "Empresa",
            },
        ],
        estudiante: [
            {
                type: Schema.Types.ObjectId,
                ref: "Estudiante",
            },
        ],
        estado: Boolean,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Solicitud', solicitudSchema);