import Item_nota from '../models/Item_nota'

export const createItem_nota = async (req, res) => {
    const {visita, item} = req.body;

    try {
    const newItem_nota = new Item_nota({
        visita,
        item,
    });

    const item_notaSaved = await newItem_nota.save();

    res.status(201).json(item_notaSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getItem_nota= async (req, res) => {
    const item_nota = await Item_nota.find()
    res.json(item_nota)
};

export const getItem_notaById = async (req, res) => {
    const { item_notaId } = req.params;

    const item_nota = await Item_nota.findById(item_notaId);
    res.status(200).json(item_nota);
};

export const updateItem_notaById = async (req, res) => {
    const updatedItem_nota = await Item_nota.findByIdAndUpdate(
        req.params.item_notaId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedItem_nota);
};

export const deleteItem_notaById = async (req, res) => {
    const { Item_notaId } = req.params;

    await Item_nota.findByIdAndDelete(Item_notaId);

    // code 200 is ok too
    res.status(200).json();
};