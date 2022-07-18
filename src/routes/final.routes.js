import {Router} from 'express'
const router = Router()

import * as finalCtrl from '../controllers/final.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], finalCtrl.createFinal)

router.get('/', finalCtrl.getFinal)

router.get("/:finalId", finalCtrl.getFinalById)

router.put("/:finalId", [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], finalCtrl.updateFinalById);

router.delete("/:finalId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], finalCtrl.deleteFinalById);


export default router;