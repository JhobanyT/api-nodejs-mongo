import { Schema, model } from "mongoose";

const finalSchema = new Schema(
    {
        practica: [
            {
                type: Schema.Types.ObjectId,
                ref: "Practica",
            },
        ],
        documento: [
            {
                type: Schema.Types.ObjectId,
                ref: "Documento",
            },
        ],
        estado: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Final', finalSchema);