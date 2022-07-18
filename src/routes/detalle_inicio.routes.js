import {Router} from 'express'
const router = Router()

import * as detalle_inicioCtrl from '../controllers/detalle_inicio.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], detalle_inicioCtrl.createDetalle_inicio)

router.get('/', detalle_inicioCtrl.getDetalle_inicio)

router.get("/:detalle_inicioId", detalle_inicioCtrl.getDetalle_inicioById)

router.put("/:detalle_inicioId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isAdmin], detalle_inicioCtrl.updateDetalle_inicioById);

router.delete("/:detalle_inicioId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isAdmin], detalle_inicioCtrl.deleteDetalle_inicioById);


export default router;