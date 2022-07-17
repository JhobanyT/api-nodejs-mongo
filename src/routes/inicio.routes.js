import {Router} from 'express'
const router = Router()

import * as inicioCtrl from '../controllers/inicio.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], inicioCtrl.createInicio)

router.get('/', inicioCtrl.getInicio)

router.get("/:inicioId", inicioCtrl.getInicioById)

router.put("/:inicioId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isAdmin], inicioCtrl.updateInicioById);

router.delete("/:inicioId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isAdmin], inicioCtrl.deleteInicioById);


export default router;