import Detalle_item from '../models/Detalle_item'

export const createDetalle_item = async (req, res) => {
    const {item, nombre, nivel} = req.body;

    try {
    const newDetalle_item  = new Detalle_item ({
        item,
        nombre,
        nivel,
    });

    const detalle_itemSaved = await newDetalle_item.save();

    res.status(201).json(detalle_itemSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getDetalle_item = async (req, res) => {
    const detalle_item = await Detalle_item.find()
    res.json(detalle_item)
};

export const getDetalle_itemById = async (req, res) => {
    const { detalle_itemId } = req.params;

    const detalle_item = await Detalle_item.findById(detalle_itemId);
    res.status(200).json(detalle_item);
};

export const updateDetalle_itemById = async (req, res) => {
    const updatedDetalle_item = await Detalle_item.findByIdAndUpdate(
        req.params.detalle_itemId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedDetalle_item);
};

export const deleteDetalle_itemById = async (req, res) => {
    const { Detalle_itemId } = req.params;

    await Detalle_item.findByIdAndDelete(Detalle_itemId);

    // code 200 is ok too
    res.status(200).json();
};