import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup} from "../middlewares";

router.post("/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.VerificarDuplicidadUsernameOEmail,
    verifySignup.verificarExistenciaRol
  ],
  usersCtrl.createUser
);

export default router;
