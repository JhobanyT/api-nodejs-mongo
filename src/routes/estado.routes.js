import {Router} from 'express'
const router = Router()

import * as estadoCtrl from '../controllers/estado.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], estadoCtrl.createEstado)

router.get('/', estadoCtrl.getEstado)

router.get("/:estadoId", estadoCtrl.getEstadoById)

router.put("/:estadoId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], estadoCtrl.updateEstadoById);

router.delete("/:estadoId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], estadoCtrl.deleteEstadoById);


export default router;