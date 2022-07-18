import Evaluador from '../models/Evaluador'

export const createEvaluador = async (req, res) => {
    const {dni, grado, persona} = req.body;

    try {
    const newEvaluador = new Evaluador({
        dni,
        grado,
        persona,
    });

    const evaluadorSaved = await newEvaluador.save();

    res.status(201).json(evaluadorSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getEvaluador= async (req, res) => {
    const evaluador = await Evaluador.find()
    res.json(evaluador)
};

export const getEvaluadorById = async (req, res) => {
    const { evaluadorId } = req.params;

    const evaluador = await Evaluador.findById(evaluadorId);
    res.status(200).json(evaluador);
};

export const updateEvaluadorById = async (req, res) => {
    const updatedEvaluador = await Evaluador.findByIdAndUpdate(
        req.params.evaluadorId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedEvaluador);
};

export const deleteEvaluadorById = async (req, res) => {
    const { EvaluadorId } = req.params;

    await Evaluador.findByIdAndDelete(EvaluadorId);

    // code 200 is ok too
    res.status(200).json();
};