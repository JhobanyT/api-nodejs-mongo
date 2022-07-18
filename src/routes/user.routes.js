import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup} from "../middlewares";

router.post("/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.VerificarDuplicidadUsernameOEmail,
    verifySignup.verificarExistenciaRol
  ],
  userCtrl.createUser
);
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email});
  if (!user) return res.status(401).send('The email doen\' exists');
  if (user.password !== password) return res.status(401).send('Wrong Password');

  const token = jwt.sign({_id: user._id}, 'secretkey');

  return res.status(200).json({token});
});

export default router;
