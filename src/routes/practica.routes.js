import {Router} from 'express'
const router = Router()

import * as practicaCtrl from '../controllers/practica.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], practicaCtrl.createPractica)

router.get('/', practicaCtrl.getPractica)

router.get("/:practicaId", practicaCtrl.getPracticaById)

router.put("/:practicaId", [authJwt.verifyToken, authJwt.isEvaluador, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], practicaCtrl.updatePracticaById);

router.delete("/:practicaId", [authJwt.verifyToken, authJwt.isEvaluador,  authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], practicaCtrl.deletePracticaById);


export default router;