import Solicitud from '../models/Solicitud'

export const createSolicitud = async (req, res) => {
    const { estado_solicitud, empresa, estudiante, estado} = req.body;

    try {
    const newSolicitud = new Solicitud({
        estado_solicitud,
        empresa,
        estudiante,
        estado,
    });

    const solicitudSaved = await newSolicitud.save();

    res.status(201).json(solicitudSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getSolicitud = async (req, res) => {
    const solicitud = await Solicitud.find()
    res.json(solicitud)
};

export const getSolicitudById = async (req, res) => {
    const { solicitudId } = req.params;

    const solicitud = await Solicitud.findById(solicitudId);
    res.status(200).json(solicitud);
};

export const updateSolicitudById = async (req, res) => {
    const updatedSolicitud = await Persona.findByIdAndUpdate(
        req.params.solicitudId,
        req.body,
        {
            new: true,
        }
        );
    res.status(200).json(updatedSolicitud);
};

export const deleteSolicitudById = async (req, res) => {
    const { solicitudId } = req.params;

    await Solicitud.findByIdAndDelete(solicitudId);

    // code 200 is ok too
    res.status(200).json();
};