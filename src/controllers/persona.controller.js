import Persona from '../models/Persona'

export const createPersona = async (req, res) => {
    const { nombre, ape_paterno, ape_materno, sexo, dia, mes, anio, direccion, telefono} = req.body;

  try {
    const newPersona = new Persona({
        nombre,
        ape_paterno,
        ape_materno,
        sexo,
        f_nacimiento: {
            dia,
            mes,
            anio,
        },
        direccion,
        telefono,
    });

    const personaSaved = await newPersona.save();

    res.status(201).json(personaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPersonas = async (req, res) => {
    const personas = await Persona.find()
    res.json(personas)
};

export const getPersonaById = async (req, res) => {
    const { personaId } = req.params;

    const persona = await Persona.findById(personaId);
    res.status(200).json(persona);
};

export const updatePersonaById = async (req, res) => {
    const updatedPersona = await Persona.findByIdAndUpdate(
        req.params.personaId,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedPersona);
};

export const deletePersonaById = async (req, res) => {
    const { personaId } = req.params;

    await Persona.findByIdAndDelete(personaId);

    // code 200 is ok too
    res.status(200).json();
};