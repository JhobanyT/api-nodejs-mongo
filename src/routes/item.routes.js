import {Router} from 'express'
const router = Router()

import * as itemCtrl from '../controllers/item.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], itemCtrl.createItem)

router.get('/', itemCtrl.getItem)

router.get("/:itemId", itemCtrl.getItemById)

router.put("/:itemId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], itemCtrl.updateItemById);

router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isEvaluador, authJwt.isCoordinador], itemCtrl.deleteItemById);


export default router;