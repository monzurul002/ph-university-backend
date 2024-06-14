import express from 'express';
import { StudentController } from './student.controller';
const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getStudentById);
export const StudentRoutes = router;
