import express from 'express';
import { AcademicSemisterControllers } from './academicSemister.controller';
import validateRequest from '../../app/midlewares/validateRequest';
import { AcademicSemisterValidations } from './academicSemister.validation';

const router = express.Router();

router.post(
  '/create-academic-semister',
  validateRequest(AcademicSemisterValidations.academicSemisterValidation),
  AcademicSemisterControllers.createAcademicSemister,
);

export const AcademicSemisterRoutes = router;
