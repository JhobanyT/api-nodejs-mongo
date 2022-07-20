import Detalle_inicio from '../models/Detalle_inicio'

export const createDetalle_inicio = async (req, res) => {
    const {inicio, documento, path} = req.body;

    try {
    const newDetalle_inicio  = new Detalle_inicio ({
        inicio,
        documento,
        path,
    });

    const detalle_inicioSaved = await newDetalle_inicio.save();

    res.status(201).json(detalle_inicioSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getDetalle_inicio = async (req, res) => {
    const detalle_inicio = await Detalle_inicio.find()
    .populate('inicio')
    .populate('documento')
    res.json(detalle_inicio)
};

export const getDetalle_inicioById = async (req, res) => {
    const { detalle_inicioId } = req.params;

    const detalle_inicio = await Detalle_inicio.findById(detalle_inicioId)
    .populate('inicio')
    .populate('documento')
    res.status(200).json(detalle_inicio);
};

export const updateDetalle_inicioById = async (req, res) => {
    const updatedDetalle_inicio = await Detalle_inicio.findByIdAndUpdate(
        req.params.detalle_inicioId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedDetalle_inicio);
};

export const deleteDetalle_inicioById = async (req, res) => {
    const { Detalle_inicioId } = req.params;

    await Detalle_inicio.findByIdAndDelete(Detalle_inicioId);

    // code 200 is ok too
    res.status(200).json();
};