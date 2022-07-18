import Estado from '../models/Estado'

export const createEstado = async (req, res) => {
    const {nombre} = req.body;

    try {
    const newEstado = new Estado({
        nombre
    });

    const estadoSaved = await newEstado.save();

    res.status(201).json(estadoSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getEstado = async (req, res) => {
    const estado = await Estado.find()
    res.json(estado)
};

export const getEstadoById = async (req, res) => {
    const { estadoId } = req.params;

    const estado = await Estado.findById(estadoId);
    res.status(200).json(estado);
};

export const updateEstadoById = async (req, res) => {
    const updatedEstado = await Empresa.findByIdAndUpdate(
        req.params.estadoId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedEstado);
};

export const deleteEstadoById = async (req, res) => {
    const { EstadoId } = req.params;

    await Estado.findByIdAndDelete(EstadoId);

    // code 200 is ok too
    res.status(200).json();
};