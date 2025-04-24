import { loginUserSchema, registerUserSchema } from '../validation/auth.js';
import {
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/auth.js';

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginUserController } from '../controllers/auth.js';
import { validationBody } from '../middlewares/validationBody.js';

const router = Router();
router.post(
'/register',
validationBody(registerUserSchema),
ctrlWrapper(registerUserController),
);
router.post(
'/login',
validationBody(loginUserSchema),
ctrlWrapper(loginUserController),
);
router.post('/refresh', 
ctrlWrapper(refreshUserSessionController));
router.post('/logout', 
ctrlWrapper(logoutUserController));
export default router;