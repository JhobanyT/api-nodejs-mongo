import {Router} from 'express'
const router = Router()

import * as empresaCtrl from '../controllers/empresa.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], empresaCtrl.createEmpresa)

router.get('/', empresaCtrl.getEmpresa)

router.get("/:empresaId", empresaCtrl.getEmpresaById)

router.put("/:empresaId", [authJwt.verifyToken, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], empresaCtrl.updateEmpresaById);

router.delete("/:empresaId", [authJwt.verifyToken, authJwt.isSecretaria, authJwt.isCoordinador, authJwt.isAdmin], empresaCtrl.deleteEmpresaById);


export default router;