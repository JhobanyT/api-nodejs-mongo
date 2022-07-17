import Nivel from '../models/Nivel'

export const createNivel = async (req, res) => {
    const {nombre, descripcion} = req.body;

    try {
    const newNivel = new Nivel({
        nombre,
        descripcion,
    });

    const nivelSaved = await newNivel.save();

    res.status(201).json(nivelSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getNivel = async (req, res) => {
    const nivel = await Nivel.find()
    res.json(nivel)
};

export const getNivelById = async (req, res) => {
    const { nivelId } = req.params;

    const nivel = await Nivel.findById(nivelId);
    res.status(200).json(nivel);
};

export const updateNivelById = async (req, res) => {
    const updatedNivel = await Nivel.findByIdAndUpdate(
        req.params.nivelId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedNivel);
};

export const deleteNivelById = async (req, res) => {
    const { NivelId } = req.params;

    await Nivel.findByIdAndDelete(NivelId);

    // code 200 is ok too
    res.status(200).json();
};