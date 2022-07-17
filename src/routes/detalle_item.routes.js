import {Router} from 'express'
const router = Router()

import * as detalle_itemCtrl from '../controllers/detalle_item.controller'
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], detalle_itemCtrl.createDetalle_item)

router.get('/', detalle_itemCtrl.getDetalle_item)

router.get("/:detalle_itemId", detalle_itemCtrl.getDetalle_itemById)

router.put("/:detalle_itemId", [authJwt.verifyToken, authJwt.isAdmin], detalle_itemCtrl.updateDetalle_itemById);

router.delete("/:detalle_itemId", [authJwt.verifyToken, authJwt.isAdmin], detalle_itemCtrl.deleteDetalle_itemById);


export default router;