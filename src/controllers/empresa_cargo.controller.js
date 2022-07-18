import Empresa_cargo from '../models/Empresa_cargo'

export const createEmpresa_cargo = async (req, res) => {
    const { empresa, cargo, persona, estado} = req.body;

    try {
    const newEmpresa_cargo = new Empresa_cargo({
        empresa,
        cargo,
        persona,
        estado,
    });

    const empresa_cargoSaved = await newEmpresa_cargo.save();

    res.status(201).json(empresa_cargoSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getEmpresa_cargo = async (req, res) => {
    const empresa_cargo = await Empresa_cargo.find()
    res.json(empresa_cargo)
};

export const getEmpresa_cargoById = async (req, res) => {
    const { empresa_cargoId } = req.params;

    const empresa_cargo = await Empresa_cargo.findById(empresa_cargoId);
    res.status(200).json(empresa_cargo);
};

export const updateEmpresa_cargoById = async (req, res) => {
    const updatedEmpresa_cargo = await Empresa_cargo.findByIdAndUpdate(
        req.params.empresa_cargoId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedEmpresa_cargo);
};

export const deleteEmpresa_cargoById = async (req, res) => {
    const { Empresa_cargoId } = req.params;

    await Empresa_cargo.findByIdAndDelete(Empresa_cargoId);

    // code 200 is ok too
    res.status(200).json();
};