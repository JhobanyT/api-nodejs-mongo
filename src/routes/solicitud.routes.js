import {Router} from 'express'
const router = Router()

import * as solicitudCtrl from '../controllers/solicitud.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], solicitudCtrl.createSolicitud)

router.get('/', solicitudCtrl.getSolicitud)

router.get("/:solicitudId", solicitudCtrl.getSolicitudById)
// router.get("/:solicitud/estudiante", solicitudCtrl.getSolicitudesByEstudiante)

router.put("/:solicitudId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria], solicitudCtrl.updateSolicitudById);

router.delete("/:solicitudId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria], solicitudCtrl.deleteSolicitudById);


export default router;