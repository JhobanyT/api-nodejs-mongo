import Estudiante from '../models/Estudiante'

export const createEstudiante = async (req, res) => {
    const {codigo, persona, ciclo} = req.body;

    try {
    const newEstudiante = new Estudiante({
        codigo,
        persona,
        ciclo,
    });

    const estudianteSaved = await newEstudiante.save();

    res.status(201).json(estudianteSaved);
    } catch (error) {
    console.log(error);
    return res.status(500).json(error);
    }
};

export const getEstudiante = async (req, res) => {
    const estudiante = await Estudiante.find()
    res.json(estudiante)
};

export const getEstudianteById = async (req, res) => {
    const { estudianteId } = req.params;

    const estudiante = await Estudiante.findById(estudianteId);
    res.status(200).json(estudiante);
};

export const updateEstudianteById = async (req, res) => {
    const updatedEstudiante = await Estudiante.findByIdAndUpdate(
        req.params.estudianteId,
        req.body,
        {
            new: true,
        }
        );
        res.status(200).json(updatedEstudiante);
};

export const deleteEstudianteById = async (req, res) => {
    const { EstudianteId } = req.params;

    await Estudiante.findByIdAndDelete(EstudianteId);

    // code 200 is ok too
    res.status(200).json();
};