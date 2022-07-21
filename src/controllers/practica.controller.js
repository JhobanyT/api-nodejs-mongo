import Practica from '../models/Practica'

export const createPractica = async (req, res) => {
    const {inicio, dia, mes, anio, di, me, an, h_entrada, h_salida} = req.body;

    try {
    const newPractica = new Practica({
        inicio,
        f_inicio: {
            dia,
            mes,
            anio
        },
        f_fin: {
            di,
            me,
            an
        },
        h_entrada,
        h_salida,
    });

    const practicaSaved = await newPractica.save();

    res.status(201).json(practicaSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getPractica = async (req, res) => {
    const practica = await Practica.find()
    .populate('inicio')
    .populate({
        path    : 'inicio',
        populate: 'solicitud'
    })
    res.json(practica);
};

export const getPracticaById = async (req, res) => {
    const { practicaId } = req.params;

    const practica = await Practica.findById(practicaId)
    .populate('inicio')
    .populate({
        path    : 'inicio',
        populate: 'solicitud'
    })
    res.status(200).json(practica);
};

export const updatePracticaById = async (req, res) => {
    const updatedPractica = await Practica.findByIdAndUpdate(
        req.params.practicaId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedPractica);
};

export const deletePracticaById = async (req, res) => {
    const { PracticaId } = req.params;

    await Practica.findByIdAndDelete(PracticaId);

    // code 200 is ok too
    res.status(200).json();
};