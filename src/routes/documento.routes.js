import {Router} from 'express'
const router = Router()

import * as documentoCtrl from '../controllers/documento.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], documentoCtrl.createDocumento)

router.get('/', documentoCtrl.getDocumento)

router.get("/:documentoId", documentoCtrl.getDocumentoById)

router.put("/:documentoId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isAdmin], documentoCtrl.updateDocumentoById);

router.delete("/:documentoId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isEstudiante, authJwt.isAdmin], documentoCtrl.deleteDocumentoById);


export default router;