import {Router} from 'express'
const router = Router()

import * as nivelCtrl from '../controllers/nivel.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], nivelCtrl.createNivel)

router.get('/', nivelCtrl.getNivel)

router.get("/:nivelId", nivelCtrl.getNivelById)

router.put("/:nivelId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], nivelCtrl.updateNivelById);

router.delete("/:nivelId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], nivelCtrl.deleteNivelById);


export default router;