import Convenio from '../models/Convenio'

export const createConvenio = async (req, res) => {
    const {nombre, detalle, dia, mes, anio, di, me, an, estado} = req.body;

    try {
    const newConvenio = new Convenio({
        nombre,
        detalle,
        periodo_inicio: {
            dia,
            mes,
            anio
        },
        periodo_fin: {
            di,
            me,
            an
        },
        estado
    });

    const convenioSaved = await newConvenio.save();

    res.status(201).json(convenioSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getConvenio = async (req, res) => {
    const convenio = await Convenio.find()
    res.json(convenio);
};

export const getConvenioById = async (req, res) => {
    const { convenioId } = req.params;

    const convenio = await Convenio.findById(convenioId)
    res.status(200).json(convenio);
};

export const updateConvenioById = async (req, res) => {
    const updatedConvenio = await Convenio.findByIdAndUpdate(
        req.params.convenioId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedConvenio);
};

export const deleteConvenioById = async (req, res) => {
    const { ConvenioId } = req.params;

    await Convenio.findByIdAndDelete(ConvenioId);

    // code 200 is ok too
    res.status(200).json();
};

