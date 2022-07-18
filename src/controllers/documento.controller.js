import Documento from '../models/Documento'

export const createDocumento = async (req, res) => {
    const {nombre} = req.body;

    try {
    const newDocumento = new Documento({
        nombre
    });

    const documentoSaved = await newDocumento.save();

    res.status(201).json(documentoSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getDocumento = async (req, res) => {
    const documento = await Documento.find()
    res.json(documento)
};

export const getDocumentoById = async (req, res) => {
    const { documentoId } = req.params;

    const documento = await Documento.findById(documentoId);
    res.status(200).json(documento);
};

export const updateDocumentoById = async (req, res) => {
    const updatedDocumento = await Documento.findByIdAndUpdate(
        req.params.documentoId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedDocumento);
};

export const deleteDocumentoById = async (req, res) => {
    const { DocumentoId } = req.params;

    await Documento.findByIdAndDelete(DocumentoId);

    // code 200 is ok too
    res.status(200).json();
};