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
    .populate('persona')
    res.json(estudiante)
};

export const getEstudianteById = async (req, res) => {
    const { estudianteId } = req.params;

    const estudiante = await Estudiante.findById(estudianteId)
    .populate('persona')
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

// export const getEstudianteByPersona = async (req, res) => {
//     const { personaName } = req.query;
//     Estudiante
//       .find({
//         empresa: { $not: { $size: 0 } },
//       })
//       .populate({ path: 'persona', match: { name: personaName }}) 
      
//       .exec((err, estudiantes) => {
//         if (err) {
//           console.log(err);
//           return res.send(err.message);
//         }
//         const estudiantByPersona = estudiantes.filter(
//           (estudiante) => estudiante.personas.length > 0
//         );

//         res.json(getEstudianteByPersona);
//       });
//   };