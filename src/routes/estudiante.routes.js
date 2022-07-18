import {Router} from 'express'
const router = Router()

import * as estudianteCtrl from '../controllers/estudiante.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], estudianteCtrl.createEstudiante)

router.get('/', estudianteCtrl.getEstudiante)

router.get("/:estudianteId", estudianteCtrl.getEstudianteById)

router.put("/:estudianteId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], estudianteCtrl.updateEstudianteById);

router.delete("/:estudianteId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], estudianteCtrl.deleteEstudianteById);


export default router;