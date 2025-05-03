import {
  loginUserController,
  resetPasswordController,
} from '../controllers/auth.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema, 
} from '../validation/auth.js';
import {
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
} from '../controllers/auth.js';

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
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

router.post(
  '/send-reset-email',
  validationBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);
router.post(
  '/reset-pwd',
  validationBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default router;