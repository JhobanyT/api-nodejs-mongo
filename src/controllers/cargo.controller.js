import Cargo from '../models/Cargo'

export const createCargo= async (req, res) => {
    const {nombre} = req.body;

    try {
    const newCargo = new Cargo({
        nombre,
    });

    const cargoSaved = await newCargo.save();

    res.status(201).json(cargoSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getCargo = async (req, res) => {
    const cargo = await Cargo.find()
    res.json(cargo)
};

export const getCargoById = async (req, res) => {
    const { cargoId } = req.params;

    const cargo = await Cargo.findById(cargoId);
    res.status(200).json(cargo);
};

export const updateCargoById = async (req, res) => {
    const updatedCargo = await Cargo.findByIdAndUpdate(
        req.params.cargoId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedCargo);
};

export const deleteCargoById = async (req, res) => {
    const { CargoId } = req.params;

    await Cargo.findByIdAndDelete(CargoId);

    // code 200 is ok too
    res.status(200).json();
};