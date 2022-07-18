import {Router} from 'express'
const router = Router()

import * as evaluadorCtrl from '../controllers/evaluador.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], evaluadorCtrl.createEvaluador)

router.get('/', evaluadorCtrl.getEvaluador)

router.get("/:evaluadorId", evaluadorCtrl.getEvaluadorById)

router.put("/:evaluadorId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], evaluadorCtrl.updateEvaluadorById);

router.delete("/:evaluadorId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], evaluadorCtrl.deleteEvaluadorById);


export default router;