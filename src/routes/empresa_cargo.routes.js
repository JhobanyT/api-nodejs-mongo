import {Router} from 'express'
const router = Router()

import * as empresa_cargoCtrl from '../controllers/empresa_cargo.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isAdmin], empresa_cargoCtrl.createEmpresa_cargo)

router.get('/', empresa_cargoCtrl.getEmpresa_cargo)

router.get("/:empresa_cargoId", empresa_cargoCtrl.getEmpresa_cargoById)

router.put("/:empresa_cargoId", [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isAdmin], empresa_cargoCtrl.updateEmpresa_cargoById);

router.delete("/:empresa_cargoId", [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isAdmin], empresa_cargoCtrl.deleteEmpresa_cargoById);


export default router;