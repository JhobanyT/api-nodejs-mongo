import {Router} from 'express'
const router = Router()

import * as empresaCtrl from '../controllers/empresa.controller'
import { authJwt } from '../middlewares'

router.post('/', empresaCtrl.createEmpresa)

router.get('/', empresaCtrl.getEmpresa)

router.get("/:empresaId", empresaCtrl.getEmpresaById)

router.put("/:empresaId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEstudiante, authJwt.isSecretaria, authJwt.isCoordinador], empresaCtrl.updateEmpresaById);

router.delete("/:empresaId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isSecretaria, authJwt.isCoordinador], empresaCtrl.deleteEmpresaById);


export default router;