import {Router} from 'express'
const router = Router()

import * as estadoCtrl from '../controllers/estado.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], estadoCtrl.createEstado)

router.get('/', estadoCtrl.getEstado)

router.get("/:estadoId", estadoCtrl.getEstadoById)

router.put("/:estadoId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], estadoCtrl.updateEstadoById);

router.delete("/:estadoId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], estadoCtrl.deleteEstadoById);


export default router;