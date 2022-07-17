import {Router} from 'express'
const router = Router()

import * as notaCtrl from '../controllers/nota.controller'
import { authJwt } from '../middlewares'
router.post('/', [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], notaCtrl.createNota)

router.get('/', notaCtrl.getNota)

router.get("/:notaId", notaCtrl.getNotaById)

router.put("/:notaId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], notaCtrl.updateNotaById);

router.delete("/:notaId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], notaCtrl.deleteNotaById);


export default router;