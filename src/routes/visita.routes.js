import {Router} from 'express'
const router = Router()

import * as visitaCtrl from '../controllers/visita.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], visitaCtrl.createVisita)

router.get('/', visitaCtrl.getVisita)

router.get("/:visitaId", visitaCtrl.getVisitaById)

router.put("/:visitaId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], visitaCtrl.updateVisitaById);

router.delete("/:visitaId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], visitaCtrl.deleteVisitaById);


export default router;