import { Schema, model } from "mongoose";

const empresa_cargoSchema = new Schema(
    {
        empresa: [
            {
                type: Schema.Types.ObjectId,
                ref: "Empresa",
            },
        ],
        cargo: [
            {
                type: Schema.Types.ObjectId,
                ref: "Cargo",
            },
        ],
        persona: [
            {
                type: Schema.Types.ObjectId,
                ref: "Persona",
            },
        ],
        estado: Boolean,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Empresa_cargo', empresa_cargoSchema);