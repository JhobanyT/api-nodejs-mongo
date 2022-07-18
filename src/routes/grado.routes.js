import {Router} from 'express'
const router = Router()

import * as gradoCtrl from '../controllers/grado.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isCoordinador], gradoCtrl.createGrado)

router.get('/', gradoCtrl.getGrado)

router.get("/:gradoId", gradoCtrl.getGradoById)

router.put("/:gradoId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], gradoCtrl.updateGradoById);

router.delete("/:gradoId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], gradoCtrl.deleteGradoById);


export default router;