import {Router} from 'express'
const router = Router()

import * as nivelCtrl from '../controllers/nivel.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], nivelCtrl.createNivel)

router.get('/', nivelCtrl.getNivel)

router.get("/:nivelId", nivelCtrl.getNivelById)

router.put("/:nivelId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], nivelCtrl.updateNivelById);

router.delete("/:nivelId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], nivelCtrl.deleteNivelById);


export default router;