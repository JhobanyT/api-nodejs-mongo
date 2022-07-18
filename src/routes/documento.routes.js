import {Router} from 'express'
const router = Router()

import * as documentoCtrl from '../controllers/documento.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], documentoCtrl.createDocumento)

router.get('/', documentoCtrl.getDocumento)

router.get("/:documentoId", documentoCtrl.getDocumentoById)

router.put("/:documentoId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isEstudiante], documentoCtrl.updateDocumentoById);

router.delete("/:documentoId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isEstudiante], documentoCtrl.deleteDocumentoById);


export default router;