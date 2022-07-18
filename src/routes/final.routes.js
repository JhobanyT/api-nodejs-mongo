import {Router} from 'express'
const router = Router()

import * as finalCtrl from '../controllers/final.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], finalCtrl.createFinal)

router.get('/', finalCtrl.getFinal)

router.get("/:finalId", finalCtrl.getFinalById)

router.put("/:finalId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], finalCtrl.updateFinalById);

router.delete("/:finalId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], finalCtrl.deleteFinalById);


export default router;