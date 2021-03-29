import { Router } from 'express';
const router = Router();

import * as userCrtl from '../controllers/user.controller';
import { authJwt, verifySignup } from '../middleware';

router.post('/', [ authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted ] ,userCrtl.createUser)

export default router;