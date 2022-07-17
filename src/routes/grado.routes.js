import {Router} from 'express'
const router = Router()

import * as gradoCtrl from '../controllers/grado.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], gradoCtrl.createGrado)

router.get('/', gradoCtrl.getGrado)

router.get("/:gradoId", gradoCtrl.getGradoById)

router.put("/:gradoId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], gradoCtrl.updateGradoById);

router.delete("/:gradoId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isCoordinador, authJwt.isAdmin], gradoCtrl.deleteGradoById);


export default router;