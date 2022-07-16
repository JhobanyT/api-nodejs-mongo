import {Router} from 'express'
const router = Router()

import * as personasCtrl from '../controllers/persona.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], personasCtrl.createPersona
);
router.get('/', personasCtrl.getPersonas)

router.get("/:personaId", personasCtrl.getPersonaById)

router.put("/:personaId", [authJwt.verifyToken, authJwt.isAdmin], personasCtrl.updatePersonaById);
  
router.delete("/:personaId", [authJwt.verifyToken, authJwt.isAdmin], personasCtrl.deletePersonaById);
  

export default router;