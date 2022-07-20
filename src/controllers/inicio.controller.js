import Inicio from '../models/Inicio'

export const createInicio = async (req, res) => {
    const {solicitud, estado} = req.body;

    try {
    const newInicio = new Inicio({
        solicitud,
        estado,

    });

    const inicioSaved = await newInicio.save();

    res.status(201).json(inicioSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getInicio = async (req, res) => {
    const inicio = await Inicio.find()
    .populate('solicitud')
    res.json(inicio)
};

export const getInicioById = async (req, res) => {
    const { inicioId } = req.params;

    const inicio = await Inicio.findById(inicioId)
    .populate('solicitud')
    res.status(200).json(inicio);
};

export const updateInicioById = async (req, res) => {
    const updatedInicio = await Inicio.findByIdAndUpdate(
        req.params.inicioId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedInicio);
};

export const deleteInicioById = async (req, res) => {
    const { InicioId } = req.params;

    await Inicio.findByIdAndDelete(InicioId);

    // code 200 is ok too
    res.status(200).json();
};