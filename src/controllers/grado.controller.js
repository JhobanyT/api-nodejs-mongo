import Grado from '../models/Grado'

export const createGrado = async (req, res) => {
    const {nombre} = req.body;

    try {
    const newGrado = new Grado({
        nombre,
    });

    const gradoSaved = await newGrado .save();

    res.status(201).json(gradoSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getGrado = async (req, res) => {
    const grado = await Grado.find()
    res.json(grado)
};

export const getGradoById = async (req, res) => {
    const { gradoId } = req.params;

    const grado = await Grado.findById(gradoId);
    res.status(200).json(grado);
};

export const updateGradoById = async (req, res) => {
    const updatedGrado = await Grado.findByIdAndUpdate(
        req.params.gradoId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedGrado);
};

export const deleteGradoById = async (req, res) => {
    const { GradoId } = req.params;

    await Grado.findByIdAndDelete(GradoId);

    // code 200 is ok too
    res.status(200).json();
};