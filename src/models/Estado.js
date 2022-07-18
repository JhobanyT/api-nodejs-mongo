import { Schema, model } from "mongoose";

const estadoSchema = new Schema(
    {
        nombre: String,

    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Estado', estadoSchema);