import {Router} from 'express'
const router = Router()

import * as visitaCtrl from '../controllers/visita.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], visitaCtrl.createVisita)

router.get('/', visitaCtrl.getVisita)

router.get("/:visitaId", visitaCtrl.getVisitaById)

router.put("/:visitaId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], visitaCtrl.updateVisitaById);

router.delete("/:visitaId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], visitaCtrl.deleteVisitaById);


export default router;