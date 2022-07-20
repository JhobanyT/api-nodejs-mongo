import Final from '../models/Final'

export const createFinal = async (req, res) => {
    const {practica, documento, estado} = req.body;

    try {
    const newFinal = new Final({
        practica,
        documento,
        estado
    });

    const finalSaved = await newFinal.save();

    res.status(201).json(finalSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getFinal = async (req, res) => {
    const final = await Final.find()
    .populate('practica')
    .populate('documento')
    res.json(final)
};

export const getFinalById = async (req, res) => {
    const { finalId } = req.params;

    const final = await Final.findById(finalId)
    .populate('practica')
    .populate('documento')
    res.status(200).json(final);
};

export const updateFinalById = async (req, res) => {
    const updatedFinal = await Final.findByIdAndUpdate(
        req.params.finalId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedFinal);
};

export const deleteFinalById = async (req, res) => {
    const { FinalId } = req.params;

    await Final.findByIdAndDelete(FinalId);

    // code 200 is ok too
    res.status(200).json();
};