import Item from '../models/Item'

export const createItem = async (req, res) => {
    const {nombre} = req.body;

    try {
    const newItem = new Item({
        nombre,
    });

    const itemSaved = await newItem.save();

    res.status(201).json(itemSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getItem= async (req, res) => {
    const item = await Item.find()
    res.json(item)
};

export const getItemById = async (req, res) => {
    const { itemId } = req.params;

    const item = await Item.findById(itemId);
    res.status(200).json(item);
};

export const updateItemById = async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(
        req.params.itemId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedItem);
};

export const deleteItemById = async (req, res) => {
    const { ItemId } = req.params;

    await Item.findByIdAndDelete(ItemId);

    // code 200 is ok too
    res.status(200).json();
};