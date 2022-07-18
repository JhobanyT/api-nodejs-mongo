import {Router} from 'express'
const router = Router()

import * as solicitudCtrl from '../controllers/solicitud.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante], solicitudCtrl.createSolicitud)

router.get('/', solicitudCtrl.getSolicitud)

router.get("/:solicitudId", solicitudCtrl.getSolicitudById)

router.put("/:solicitudId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria], solicitudCtrl.updateSolicitudById);

router.delete("/:solicitudId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria], solicitudCtrl.deleteSolicitudById);


export default router;