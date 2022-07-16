import { Router } from "express";
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/signup', 
[verifySignup.VerificarDuplicidadUsernameOEmail, verifySignup.verificarExistenciaRol], 
authCtrl.signUp)

router.post('/signin', authCtrl.signin)

export default router;