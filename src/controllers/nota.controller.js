import Nota from '../models/Nota'

export const createNota = async (req, res) => {
    const {item_nota, detalle_item} = req.body;

    try {
    const newNota = new Nota({
        item_nota,
        detalle_item,
    });

    const notaSaved = await newNota.save();

    res.status(201).json(notaSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getNota = async (req, res) => {
    const nota = await Nota.find()
    res.json(nota)
};

export const getNotaById = async (req, res) => {
    const { NotaId } = req.params;

    const nota = await Nota.findById(notaId);
    res.status(200).json(nota);
};

export const updateNotaById = async (req, res) => {
    const updatedNota = await Nota.findByIdAndUpdate(
        req.params.notalId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedNota);
};

export const deleteNotaById = async (req, res) => {
    const { NotaId } = req.params;

    await Nota.findByIdAndDelete(NotaId);

    // code 200 is ok too
    res.status(200).json();
};