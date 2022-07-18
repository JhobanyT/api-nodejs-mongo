import {Router} from 'express'
const router = Router()

import * as item_notaCtrl from '../controllers/item_nota.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], item_notaCtrl.createItem_nota)

router.get('/', item_notaCtrl.getItem_nota)

router.get("/:item_notaId", item_notaCtrl.getItem_notaById)

router.put("/:item_notaId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], item_notaCtrl.updateItem_notaById);

router.delete("/:item_notaId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], item_notaCtrl.deleteItem_notaById);


export default router;