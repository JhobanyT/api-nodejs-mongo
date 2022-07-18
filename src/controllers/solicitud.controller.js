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
    // .find({}, {estado_solicitud: 0})
    // .find({ empresa: -1})
    
    // .find({ estado: -1})
    .populate('estudiante')
    .populate('empresa')
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

// export const getSolicitudesByEstudiante = async (req, res) => {
//     const { estudianteName } = req.query;
//     Solicitud
//       .find({
//         estudiante: { $not: { $size: 0 } }
//       })
//       .populate({ path: 'estudiante', match: { codigo: estudianteCodigo } //.populate({ path: 'empresa', match: { name: empresaName } }) 
//         }) 
      
//       .exec((err, solicitudes) => {
//         if (err) {
//           console.log(err);
//           return res.send(err.message);
//         }
//         const solicitudesByEstudiante = solicitudes.filter(
//           (solicitud) => solicitud.estudiante.length > 0
//         );

//         res.json(solicitudesByEstudiante);
//       });
//   };

//   export const getSolicitudesByEmpresa = async (req, res) => {
//     const { empresaName } = req.query;
//     Solicitud
//       .find({
//         empresa: { $not: { $size: 0 } },
//       })
//       .populate({ path: 'empresa', match: { ruc: empresaRuc }, //.populate({ path: 'empresa', match: { name: empresaName } }) 
//         }) 
      
//       .exec((err, solicitudes) => {
//         if (err) {
//           console.log(err);
//           return res.send(err.message);
//         }
//         const solicitudesByEmpresa = solicitudes.filter(
//           (solicitud) => solicitud.empresas.length >= 0
//         );

//         res.json(getSolicitudesByEmpresa);
//       });
//   };
