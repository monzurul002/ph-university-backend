import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';

import validateRequest from '../../app/midlewares/validateRequest';
import { StudentValidations } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidations.CreateStudentValidationSchema),
  userControllers.createStudent,
);

export const UserRoutes = router;
