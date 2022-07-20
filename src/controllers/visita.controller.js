import Visita from '../models/Visita'

export const createVisita = async (req, res) => {
    const {practica, dia, mes, anio, evaluador, estado} = req.body;

    try {
    const newVisita = new Visita({
        practica,
        fecha: {
            dia,
            mes,
            anio,
        },
        evaluador,
        estado,
    });

    const visitaSaved = await newVisita.save();

    res.status(201).json(visitaSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getVisita = async (req, res) => {
    const visita = await Visita.find()
    .populate('practica')
    .populate('evaluador')
    .populate('estado')
    res.json(visita)
};

export const getVisitaById = async (req, res) => {
    const { visitaId } = req.params;

    const visita = await Visita.findById(visitaId)
    .populate('practica')
    .populate('evaluador')
    .populate('estado')
    res.status(200).json(visita);
};

export const updateVisitaById = async (req, res) => {
    const updatedVisita = await Visita.findByIdAndUpdate(
        req.params.visitaId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedVisita);
};

export const deleteVisitaById = async (req, res) => {
    const { VisitaId } = req.params;

    await Visita.findByIdAndDelete(VisitaId);

    // code 200 is ok too
    res.status(200).json();
};