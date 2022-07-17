import {Router} from 'express'
const router = Router()

import * as cargoCtrl from '../controllers/cargo.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isCoordinador, authJwt.isSecretaria, authJwt.isAdmin], cargoCtrl.createCargo)

router.get('/', cargoCtrl.getCargo)

router.get("/:cargoId", cargoCtrl.getCargoById)

router.put("/:cargoId", [authJwt.verifyToken, authJwt.isCoordinador, authJwt.isSecretaria, authJwt.isAdmin], cargoCtrl.updateCargoById);

router.delete("/:cargoId", [authJwt.verifyToken, authJwt.isCoordinador, authJwt.isSecretaria, authJwt.isAdmin], cargoCtrl.deleteCargoById);


export default router;