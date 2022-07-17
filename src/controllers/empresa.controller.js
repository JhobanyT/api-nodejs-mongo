import Empresa from '../models/Empresa'

export const createEmpresa = async (req, res) => {
    const {nombre, ruc, direccion, telefono} = req.body;

    try {
    const newEmpresa = new Empresa({
        nombre,
        ruc,
        direccion,
        telefono,
    });

    const empresaSaved = await newEmpresa.save();

    res.status(201).json(empresaSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getEmpresa = async (req, res) => {
    const empresa = await Empresa.find()
    res.json(empresa)
};

export const getEmpresaById = async (req, res) => {
    const { empresaId } = req.params;

    const empresa = await Empresa.findById(empresaId);
    res.status(200).json(empresa);
};

export const updateEmpresaById = async (req, res) => {
    const updatedEmpresa = await Empresa.findByIdAndUpdate(
        req.params.empresaId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedEmpresa);
};

export const deleteEmpresaById = async (req, res) => {
    const { EmpresaId } = req.params;

    await Empresa.findByIdAndDelete(EmpresaId);

    // code 200 is ok too
    res.status(200).json();
};