import {Router} from 'express'
const router = Router()

import * as evaluadorCtrl from '../controllers/evaluador.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], evaluadorCtrl.createEvaluador)

router.get('/', evaluadorCtrl.getEvaluador)

router.get("/:evaluadorId", evaluadorCtrl.getEvaluadorById)

router.put("/:evaluadorId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], evaluadorCtrl.updateEvaluadorById);

router.delete("/:evaluadorId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], evaluadorCtrl.deleteEvaluadorById);


export default router;