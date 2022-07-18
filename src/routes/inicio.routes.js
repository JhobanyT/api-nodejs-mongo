import {Router} from 'express'
const router = Router()

import * as inicioCtrl from '../controllers/inicio.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], inicioCtrl.createInicio)

router.get('/', inicioCtrl.getInicio)

router.get("/:inicioId", inicioCtrl.getInicioById)

router.put("/:inicioId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria], inicioCtrl.updateInicioById);

router.delete("/:inicioId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria], inicioCtrl.deleteInicioById);


export default router;