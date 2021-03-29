import { Router } from 'express'
const router = Router()

import * as authCrtl from '../controllers/auth.controller';
import {verifySignup} from '../middleware'

router.post('/signup',[ 
    verifySignup.checkDuplicateUsernameOrEmail, 
    verifySignup.checkRolesExisted] 
    , authCrtl.singUp);
router.post('/signin', authCrtl.singIn);

export default router;