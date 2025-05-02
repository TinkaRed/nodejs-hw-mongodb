import { loginUserSchema, registerUserSchema, requestResetEmailSchema } from '../validation/auth.js';
import {
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  loginUserController,
  requestResetEmailController,
} from '../controllers/auth.js';

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validationBody } from '../middlewares/validationBody.js';

import { resetPasswordSchema } from '../validation/auth.js';
import { resetPasswordController } from '../controllers/auth.js';

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

router.post(
  '/refresh',
  ctrlWrapper(refreshUserSessionController),
);

router.post(
  '/logout',
  ctrlWrapper(logoutUserController),
);

router.post(
  '/send-reset-email',
  validationBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

router.post(
  '/reset-password',
  validationBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default router;
