import {Router} from 'express'
const router = Router()

import * as convenioCtrl from '../controllers/convenio.controller'
import { authJwt } from '../middlewares'

router.post('/', convenioCtrl.createConvenio);

router.get('/', convenioCtrl.getConvenio)

router.get("/:convenioId", convenioCtrl.getConvenioById)

router.put("/:convenioId", convenioCtrl.updateConvenioById);

router.delete("/:convenioId", convenioCtrl.deleteConvenioById);


export default router;
